'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/* JS compress */
// const defaultJSONDic = '[[[[[t,[[.,[[[G,B],T],/]],l]],[[[[[[[[;,X],[Z,&]],[[\\\\,[°,]],[!,?]]],[U,+]],b],h],c],:]],[[[[3,[[[q,K],[[#,[[~,|],[*,£]]],j]],[H,[J,L]]]],[g,6]],\\,],[[[8,7],m],i]]],[[[[2,[[A,[k,z]],[\\[,\\]]]],r],[n,[u,p]]],[[s,o],[[[f,[[[[[Q,\'],€],[>,%]],W],[C,P]]],1],[[y,_],[[w,[E,[[Y,<],V]]],-]]]]]],[[",[e,[[0,[4,{]],[[},[[I,R],v]],[9,[[[),=],[$,(]],[M,N]]]]]]],[ ,[[[[[[D,F],S],[x,[O,@]]],5],d],a]]]]';
const defaultJSONDic = '[[[[[[s,[[in,[ss,[":true,the]]],8]],[[h,[S,[[J,+],R]]],[at,7]]],[e,[2,p]]],[[[[[A,}\\,{"],er],[[[z,nt],}],[\\],]]],[[n,re],[[[[[[Q,X],Y],}\\]}\\,"],W],[[ing,[*,":null]],[a ,nd]]],y]]],[[1,[-,[ed,H]]],[[_,[w,es]],[4,ti]]]]],[[[":", ],[a,[[[[E,I],[P,D]],en],[al,9]]]],[[[[[[[0\\,,th],[(,)]],[}\\,",fi]],[{,":{"]],[b,v]],c],[[\\,,[[[F,N],L],f]],[5,[[00,is],[[V,j],[G,O]]]]]]]],[[[["\\,",[r,[[x,[\\\\,@]],[M,T]]]],[t,o]],[[[.,[an,[k,":\\[{"]]],d],[[:,[it,/]],u]]],[[[[[or,[[[[?,}}\\,"],[Z,!]],[[ee,[}},["value":,[\\[,[\\[{,[}\\,{,[}}\\,,:""]]]]]]],[}\\]}\\,,"id":]]],[U,q]]],on],i],[",[[[":\\[,[["name":",ng],[#,":false]]],ar],g]]],[[[3,[st,[[B,K],C]]],l],[m,[0,6]]]]]]';
let defaultDictionary = extractDictionary(defaultJSONDic);
// let defaultDictionary = buildDictionary(defaultJSONHist);

/** histogram: build an histogram from data
 *
 * @param {string} data which must be analyzed
 * @param {object} [options] to configure the histogram
 * @param {String[]} [options.list] consider only characters in this list
 * @param {boolean} [options.sensitive=true] consider characters sensitively
 * @param {boolean} [options.verbose=false] Display starting actions
 * @param {boolean} [options.debug=false] Display debug informations
 *
 * @returns {Map} a tree containing each character and its number of occurence.
 */
function histogram(data, options = {}) {
    const {
        sensitive = true,
        verbose = false,
        debug = false,
        list = [],
    } = options;

    if (verbose || debug) {
        console.log('Build histogram');
    }

    let strSize = 1;
    const isLimited = !!list.length;
    const length = data.length;
    const hgm = new Map();

    if (isLimited) {
        list.forEach((char) => {
            if (!sensitive) {
                char = char.toLowerCase();
            }
            if (char.length > strSize) {
                strSize = char.length;
            }
            hgm.set(char, 0);
        });
        hgm.set('', 0);
    }

    if (verbose || debug) {
        console.log('Histogram parameters:\n\tsensitive: %s\n\tisLimited: %s\n\tstrSize: %d\n\tData length: %d', sensitive, isLimited, strSize, length);
    }

    for (let index = 0; index < length; index++) {
        let currentSize = strSize;
        let char;
        do {
            char = data.substr(index, currentSize);

            if (!sensitive) {
                char = char.toLowerCase();
            }
        } while (--currentSize > 0 && !hgm.has(char));
        index += currentSize;

        if (isLimited && !hgm.has(char)) {
            char = '';
        }

        const previousNb = hgm.get(char) || 0;
        hgm.set(char, previousNb + 1);
    }

    if (debug) {
        console.log('Histogram built:\n', hgm);
    }
    return hgm;
}

/** buildDictionary: build a dictionary from an histogram
 *
 * @param {Map} histogram which must be analyzed
 * @param {Object} [options] to configure the dictionary
 * @param {Number} [options.addEscape = 0] add a character to the histogram which represents the escape sequence (the next character is not encoded)
 *                                         The value means the weight to apply for this special character.(if it is between 0 and 1 it is considered as a percentage)
 * @param {Boolean} [options.verbose=false] Display starting actions
 * @param {Boolean} [options.debug=false] Display debug informations
 *
 * @returns {Object} an object containing the code and decode operations.
 */
function buildDictionary(histogram, options = {}) {
    const {
        addEscape = 0,
        verbose = false,
        debug = false,
    } = options;

    if (verbose || debug) {
        console.log('Build dictionary');
    }

    let nbChars = 0;
    const list = Array.from(histogram, ([char, nb]) => (nbChars += nb, {
        value: char,
        weight: nb,
    }));

    if (addEscape && !histogram.has('')) {
        const weight = addEscape < 1 ? nbChars * addEscape : addEscape;
        list.push({
            value: '',
            weight: weight,
        });
    }

    function *extractNext() {
        while (list.length > 1) {
            /* Sort descendant */
            list.sort((a, b) => b.weight - a.weight || 1);
            if (debug) {
                console.log('sorted:', list.map(v => {
                    if (typeof v.value === 'string') {
                        return `${v.value}(${v.weight})`;
                    }
                    return `¤${v.weight}¤`;
                }));
            }
            const item1 = list.pop();
            const item2 = list.pop();

            yield [item1, item2];
        }
    }

    for (const [item1, item2] of extractNext()) {
        const item = {
            value: {
                0: item2,
                1: item1,
            },
            weight: item1.weight + item2.weight,
        };

        list.push(item);
    }

    function buildTree(item, path = []) {
        const value = item.value;
        if (typeof value === 'string') {
            code.set(value, path);
            return value;
        }

        return {
            0: buildTree(value[0], path.concat([0])),
            1: buildTree(value[1], path.concat([1])),
        };
    }

    const code = new Map();
    const decode = buildTree(list[0]);

    if (debug) {
        console.log('Dictionary result:', {code, decode});
    }

    return {
        decode,
        code,
    };
}

/**
 *
 * @param {*} dictionary data from which short dictionary should be generated. It could be a code/decode dictionary or a short string dictionary
 * @param {object} [options] to configure the dictionary
 * @param {boolean} [options.verbose=false] Display starting actions
 * @param {boolean} [options.debug=false] Display debug informations
 *
 * @return {string} a short dictionary
 */
function exportDictionary(dictionary, options = {}) {
    const {
        verbose = false,
        debug = false,
    } = options;

    if (verbose || debug) {
        console.log('Export dictionary');
    }

    const decode = extractDictionary(dictionary, options).decode;

    function writeCode(chunked) {
        if (typeof chunked === 'string') {
            return chunked.replace(/([\\,\[\]])/g, '\\$1');
        }
        const part1 = writeCode(chunked[0]);
        const part2 = writeCode(chunked[1]);
        return `[${part1},${part2}]`;
    }

    const strDico = writeCode(decode);

    if (verbose || debug) {
        console.log('Exported dictionary: %s', strDico);
    }

    return strDico;
}

/**
 *
 * @param {*} dictionary data from which dictionary should be generated. It could be a code/decode dictionary or a  short string dictionary
 * @param {object} [options] to configure the dictionary
 * @param {boolean} [options.verbose=false] Display starting actions
 * @param {boolean} [options.debug=false] Display debug informations
 *
 * @return {Object} a full dictionary object (with code/decode property)
 */
function extractDictionary(dictionary, options = {}) {
    const {
        verbose = false,
        debug = false,
    } = options;
    let code, decode;

    if (verbose || debug) {
        console.log('Extract dictionary');
    }

    if (typeof dictionary === 'string') {
        if (debug) {
            console.log('String dictionary:', dictionary);
        }

        try {
            const json = JSON.parse(dictionary);
            dictionary = json;
        } catch(e) {
            if (debug) {
                console.log('not JSON');
            }

            /* try different format */
            dictionary = dictionary.replace(/([,\[])((?:\\.|[^,[\]\\])*)(?=[,\]])/g, (pattern, prefix, chars) => {
                chars = chars.replace(/\\(.)/g, '$1').replace(/["\\]/g, '\\$&');
                return `${prefix}"${chars}"`;
            });
            try {
                const json = JSON.parse(dictionary);
                dictionary = json;
            } catch (e) {
                if (debug) {
                    console.log('Transformed dictionary:', dictionary);
                }
            }
        }
    }

    if (typeof dictionary === 'object') {
        if (dictionary instanceof Map) {
            code = dictionary;
        } else {
            if (dictionary.code && dictionary.code instanceof Map) {
                code = dictionary.code;
            }
            if (dictionary.decode) {
                decode = dictionary.decode;
            }
            if (dictionary[0]) {
                decode = dictionary;
            }
        }
    }

    if (code && !decode) {
        decode =  {};

        if (debug) {
            console.log('Generate decode from: ', code);
        }
    }
    if (!code && decode) {
        code = new Map();

        if (debug) {
            console.log('Generate code from: ', JSON.stringify(decode, null, 2));
        }

        const analyze = (item, path) => {
            if (typeof item === 'string') {
                code.set(item, path);
                return;
            }
            if (item === undefined) {
                if (debug) {
                    console.log('path: %s\ncontent: %s', path.join(''), JSON.stringify(path.slice(0, -1).reduce((item, i) => item[i], decode), null, 2));
                }
                throw new Error('Missing value in patch ' + path.join(''));
            }
            analyze(item[0], path.concat([0]));
            analyze(item[1], path.concat([1]));
        };

        analyze(decode, []);
    }

    if (!code || !decode) {
        throw new Error('Data is not enough to rebuild dictionary');
    }


    if (debug) {
        console.log('dictionary extracted: ', {code, decode});
    }

    return {
        code,
        decode,
    };
}

/** pack: compress string
 *
 * @param {string} text which should be compressed
 * @param {object} [options] to configure the compression
 * @param {Map} [options.dictionary] the one to use to pack data
 * @param {boolean} [options.computeDictionary=false] compute the dictionary from text (is ignored if dictionary is provided)
 * @param {boolean} [options.embedDictionary=false] If true add the dictionary at start of the result
 * @param {boolean} [options.sensitive=true] consider characters sensitively (used only if dictionary should be computed)
 *                                           Warning: there can be data lost if disabled.
 * @param {boolean} [options.verbose=false] Display starting actions
 * @param {boolean} [options.debug=false] Display debug informations
 *
 * @returns {string} the packed string.
 */
function pack(text, options = {}) {
    const {
        computeDictionary = false,
        embedDictionary = false,
        verbose = false,
        debug = false,
    } = options;

    if (verbose || debug) {
        console.log('Start packing: string length (%d)', text.length);
    }

    const dictionary = options.dictionary && extractDictionary(options.dictionary) || (computeDictionary && buildDictionary(histogram(text, {
        sensitive: options.sensitive,
        verbose,
        debug,
    }), {
        addEscape: 0.01,
        verbose,
        debug,
    })) || defaultDictionary;
    const encode = dictionary && dictionary.code;

    if (!encode) {
        throw new Error('Dictionary to code the text is missing');
    }

    let strSize = 1;
    encode.forEach((value) => {
        if (value.length > strSize) {
            strSize = value.length;
        }
    });

    const textLength = text.length;
    let packedBin = [];
    let byte = [];

    if (embedDictionary) {
        const strDico = exportDictionary(dictionary);
        const strDicoLng = strDico.length;
        packedBin.push(Math.floor(strDicoLng / 256), strDicoLng % 256);
        for ( const char of strDico) {
            packedBin.push(char.charCodeAt(0));
        }
        if (debug) {
            console.log('Embeded dictionary:\n\tlength: %d\n\tdictionary: %s', strDicoLng, strDico);
        }
    }

    function createByte() {
        if (byte.length >= 8) {
            const value = byte.splice(0, 8).reduce((val, bit) => {
                return val << 1 | +bit;
            }, 0);
            packedBin.push(value);

            /* In case there were more than 16 bits stored */
            createByte();
        }
    }

    for (let index = 0; index < textLength; index++) {
        let char;
        let currentSize = strSize;
        do {
            char = text.substr(index, currentSize);
        } while (--currentSize > 0 && !encode.has(char));
        index += currentSize;

        const encoded = encode.get(char);
        if (encoded) {
            byte.push(...encoded);
        } else {
            const escape = encode.get('');
            /* If no escape sequence are set drop this char */
            if (escape) {
                const code = char.charCodeAt(0);
                const binCode = code.toString(2);
                const nbBytes = Math.ceil(binCode.length / 8);
                const binCodeLength = nbBytes * 8;

                const strBinCode = binCode.padStart(binCodeLength, '0');
                const codeLength = (nbBytes - 1).toString(2).padStart(2, '0');

                if (nbBytes > 4) {
                    console.log('Overflow!!!');
                }
                byte.push(...escape, ...codeLength, ...strBinCode);
            }
        }
        createByte();
    }

    /* Add the End marker
     * XXX: The final bit is 1 (compulsory) and following are 0 (to fill byte)
     */
    const filled = new Array(8 - ((byte.length + 1) % 8 || 8)).fill(0);
    byte.push(1, ...filled);
    createByte();

    if (debug) {
        console.log('pack result:', packedBin);
    }
    if (verbose || debug) {
        console.log('Compression rate:', 100 - (packedBin.length * 100 / text.length));
    }

    return packedBin.map((bin) => String.fromCharCode(bin)).join('');
}


/** unpack: uncompress packed string
 *
 * @param {string} text which should be uncompressed
 * @param {object} [options] to configure the compression
 * @param {Map} [options.dictionary] the one to use to unpack data
 * @param {boolean} [options.embedDictionary=false] If true read the dictionary at start of the result
 * @param {boolean} [options.verbose=false] Display starting actions
 * @param {boolean} [options.debug=false] Display debug informations
 *
 * @returns {string} the packed string.
 */
function unpack(packed, options = {}) {
    const {
        embedDictionary = false,
        verbose = false,
        debug = false,
    } = options;

    if (verbose || debug) {
        console.log('Start unpacking: string length (%d)', packed.length);
    }

    let dictionary = options.dictionary || defaultDictionary;

    if (embedDictionary) {
        const dicoLength = packed.charCodeAt(0) * 255 + packed.charCodeAt(1) * 1 + 2;
        dictionary = packed.slice(2, dicoLength);

        /* remove the dictionary from the string */
        packed = packed.slice(dicoLength);

        if (debug) {
            console.log('Use embed dictionary (%d): %s', dicoLength, dictionary);
        }
    }

    dictionary = extractDictionary(dictionary);
    const decode = dictionary.decode;

    const packedLength = packed.length;
    let decodeIndex = decode;
    let finalStr = [];

    function *readByte(str) {
        const strLength = str.length;

        for (let index = 0; index < strLength; index++) {
            let binaries = str.charCodeAt(index).toString(2).padStart(8, '0');
            if (index === strLength - 1) {
                /* remove the end marker */
                binaries = binaries.slice(0, binaries.lastIndexOf('1'));
            }

            yield binaries;
        }
    }

    const bytes = readByte(packed);
    for (let binaries of bytes) {
        for (let bitIndex = 0; bitIndex < binaries.length; bitIndex++) {
            const bit = binaries.charAt(bitIndex);
            decodeIndex = decodeIndex[bit];
            if (typeof decodeIndex === 'string') {
                if (decodeIndex !== '') {
                    finalStr.push(decodeIndex);
                } else {
                    /** Manage escaped str '' */

                    /* read length of char */
                    if (bitIndex + 2 >= binaries.length) {
                        binaries += bytes.next().value;
                    }
                    const charLng = (parseInt(binaries.substr(bitIndex + 1, 2), 2) + 1) * 8;
                    bitIndex += 2;

                    /* read char */
                    while (bitIndex + charLng >= binaries.length) {
                        binaries += bytes.next().value;
                    }
                    const charCode = parseInt(binaries.substr(bitIndex + 1, charLng), 2);
                    bitIndex += charLng;

                    finalStr.push(String.fromCharCode(charCode));
                }
                decodeIndex = decode;
            }
        }
    }

    return finalStr.join('');
}

exports.buildDictionary = buildDictionary;
exports.exportDictionary = exportDictionary;
exports.extractDictionary = extractDictionary;
exports.histogram = histogram;
exports.pack = pack;
exports.unpack = unpack;
