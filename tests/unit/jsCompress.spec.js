import {
    histogram,
    buildDictionary,
    exportDictionary,
    extractDictionary,
    pack,
    unpack,
} from '../../src/jsCompress.js';

const test_test = {"sample-data":"These data are only for example and does not have real meanings. There are used only to test compression capacity by trying to use as much as possible all characters and to test the correct characters repartitions","id":1,"value":0,"nullValue":null,"empty":"","noData":"","emptyObject":{},"data":[{"id":1,"first_name":"Jeanette","last_name":"Penddreth","email":"jpenddreth0@census.gov","gender":"Female","ip_address":"26.58.193.2"},{"id":2,"first_name":"Giavani","last_name":"Frediani","email":"gfrediani1@senate.gov","gender":"Male","ip_address":"229.179.4.212"},{"id":3,"first_name":"Noell","last_name":"Bea","email":"nbea2@imageshack.us","gender":"Female","ip_address":"180.66.162.255"},{"id":4,"first_name":"Willard","last_name":"Valek","email":"wvalek3@vk.com","gender":"Male","ip_address":"67.76.188.26"}],"data-base":[{"_id":{"$oid":"5968dd23fc13ae04d9000001"},"product_name":"sildenafil citrate","supplier":"Wisozk Inc","quantity":261,"unit_cost":"$10.47"},{"_id":{"$oid":"5968dd23fc13ae04d9000002"},"product_name":"Mountain Juniperus ashei","supplier":"Keebler-Hilpert","quantity":292,"unit_cost":"€8.74"},{"_id":{"$oid":"5968dd23fc13ae04d9000003"},"product_name":"Dextromathorphan HBr","supplier":"Schmitt-Weissnat","quantity":211,"unit_cost":"$20.53"}],"geozip":{"as":"AS16509 Amazon.com, Inc.","city":"Boardman","country":"United States","countryCode":"US","isp":"Amazon","lat":45.8696,"lon":-119.688,"org":"Amazon","query":"54.148.84.95","region":"OR","regionName":"Oregon","status":"success","timezone":"America/Los_Angeles","zip":"97818"},"geozip2":{"as":"1243 somewhere BC Incorporation.","city":"Delphy","country":"European Union","countryCode":"EU","isp":"EDF","lat":42.56716,"lon":-120.688,"org":"GHK","query":"54.148.84.95","region":"MN","regionName":"OPQRST","status":"failed","timezone":"France in Paris or arround it's there","zip":"97818"},"google-maps":{"markers":[{"name":"Rixos The Palm Dubai","position":[25.1212,55.1535]},{"name":"Shangri-La Hotel","location":[25.2084,55.2719]},{"name":"Grand Hyatt","location":[25.2285,55.3273]},{"name":"COunter","location":[25.2285,15.3273]},{"name":"Some counter","location":[25.2285,52.3273]},{"name":"A place","location":[25.2285,55.3264]},{"name":"NORTH WHERE","location":[25.2005,55.3273]}]},"example of data":{"clients":[{"id":"59761c23b30d971669fb42ff","isActive":true,"age":36,"name":"Dunlap Hubbard","gender":"male","company":"CEDWARD","email":"dunlaphubbard@cedward.com","phone":"+1 (890) 543-2508","address":"169 Rutledge Street, Konterra, Northern Mariana Islands, 8551"},{"id":"59761c233d8d0f92a6b0570d","isActive":true,"age":24,"name":"Kirsten Sellers","gender":"female","company":"EMERGENT","email":"kirstensellers@emergent.com","phone":"+1 (831) 564-2190","address":"886 Gallatin Place, Fannett, Arkansas, 4656"},{"id":"12761c233e8d0e12a6b0510d","isActive":true,"age":24,"name":"Brigite Zarminyap","gender":"female","company":"WASTING","email":"zarminyap.b@game.com","phone":"+1 (831) 564-2190","address":"886 Wyatt Victor, Ermans, Arkansas, 78301"},{"id":"59761c23fcb6254b1a06dad5","isActive":false,"age":30,"name":"Acosta Robbins","gender":"male","company":"ORGANICA","email":"acostarobbins@organica.com","phone":"+1 (882) 441-3367","address":"697 Linden Boulevard, Sattley, Idaho, 1035"}]},"twitter":[{"created_at":"Thu Jun 22 21:00:00 +0000 2017","id":877994604561387500,"id_str":"877994604561387520","text":"Creating a Grocery List Manager Using Angular, Part 1: Add &amp; Display Items https://t.co/xFox78juL1 #Angular #Vue #XY","truncated":false,"entities":{"hashtags":[{"text":"Angular","indices":[103,111]}],"symbols":[],"user_mentions":[],"urls":[{"url":"https://t.co/xFox78juL1","expanded_url":"http://buff.ly/2sr60pf","display_url":"buff.ly/2sr60pf","indices":[79,102]}]},"source":"<a href=\"http://bufferapp.com\" rel=\"nofollow\">Buffer</a>","user":{"id":772682964,"id_str":"772682964","name":"SitePoint JavaScript","screen_name":"SitePointJS","location":"Melbourne, Australia","description":"Keep up with JavaScript tutorials, tips, tricks and articles at SitePoint. And there are some % percent to use % chars!","url":"http://t.co/cCH13gqeUK","entities":{"url":{"urls":[{"url":"http://t.co/cCH13gqeUK","expanded_url":"http://sitepoint.com/javascript","display_url":"sitepoint.com/javascript","indices":[0,22]}]},"description":{"urls":[]}},"protected":false,"followers_count":2145,"friends_count":18,"listed_count":328,"created_at":"Wed Aug 22 02:06:33 +0000 2012","favourites_count":57,"utc_offset":43200,"time_zone":"Wellington"}}],"wordpress":[{"id":157538,"date":"2017-07-21T10:30:34","date_gmt":"2017-07-21T17:30:34","guid":{"rendered":"https://www.sitepoint.com/?p=157538"},"modified":"2017-07-23T21:56:35","modified_gmt":"2017-07-24T04:56:35","slug":"why-the-iot-threatens-your-wordpress-site-and-how-to-fix-it","status":"publish","type":"post","link":"https://www.sitepoint.com/why-the-iot-threatens-your-wordpress-site-and-how-to-fix-it/","title":{"rendered":"Why the IoT Threatens Your WordPress Site (and How to Fix It)"},"content":{"sub_value":{"alpha":"Omega","bravo":"Charly or Charlie","india":"Hotel"}},"excerpt":{"fix":"The correct one","estimation-cost":1192320},"author":72546,"featured_media":157542,"comment_status":"open","ping_status":"closed","sticky":false,"template":"","format":"standard","meta":[],"categories":[6132],"tags":[1798,6298]}],"some More characters":"abcdefghhijklmnopqrstuvwxyz ABCDEFGHHIJKLMNOPQRSTUVWXYZ ?.,;:/\\\\!*#\"'|@°+<>1234567890="};
const test_chrono = [{"name":"Count 5 minutes","format":{"display":"{HH}:{MM}:{SS}.{LLL}","events":[{"id":"init","name":"initialisation","trigger":"reset","triggerValue":null,"enabled":true,"actions":[{"action":"set","value":300000},{"action":"increment","value":-1},{"action":"format","value":"{HH}:{MM}:{SS}.{LLL}"},{"action":"clearRecords","value":""},{"action":"enable","value":"*"},{"action":"color","value":"black"}]},{"id":"event 1","name":"Timeout out","trigger":"reach","triggerValue":0,"enabled":true,"actions":[{"action":"stop","value":""},{"action":"sound","value":"daitokuji"}]}]},"id":"preset 0","order":0}];
const JSON_test = JSON.stringify(test_test);
const JSON_chrono = JSON.stringify(test_chrono);
const JSON_BIG = JSON.stringify({
    test:test_test,
    chrono1: test_chrono,
    chrono2: test_chrono,
});

describe('jsCompress.js', () => {
    describe('histogram', () => {
        it('should counts simple case', () => {
            const string1 = 'AAABCDEFACBBF';
            const hist1 = histogram(string1);

            expect(hist1 instanceof Map).toBe(true);
            expect(hist1.size).toBe(6);
            expect(hist1.get('A')).toBe(4);
            expect(hist1.get('B')).toBe(3);
            expect(hist1.get('C')).toBe(2);
            expect(hist1.get('D')).toBe(1);
            expect(hist1.get('E')).toBe(1);
            expect(hist1.get('F')).toBe(2);
        });

        it('should be case sensitive', () => {
            const string1 = 'Hello this is a small TEXT!';
            const hist1 = histogram(string1);
            const hist2 = histogram(string1, {sensitive: true});

            expect(hist1 instanceof Map).toBe(true);
            expect(hist1.size).toBe(15);
            expect(hist1.get('H')).toBe(1);
            expect(hist1.get('e')).toBe(1);
            expect(hist1.get('l')).toBe(4);
            expect(hist1.get('o')).toBe(1);
            expect(hist1.get(' ')).toBe(5);
            expect(hist1.get('t')).toBe(1);
            expect(hist1.get('h')).toBe(1);
            expect(hist1.get('i')).toBe(2);
            expect(hist1.get('s')).toBe(3);
            expect(hist1.get('a')).toBe(2);
            expect(hist1.get('m')).toBe(1);
            expect(hist1.get('T')).toBe(2);
            expect(hist1.get('E')).toBe(1);
            expect(hist1.get('X')).toBe(1);
            expect(hist1.get('!')).toBe(1);

            expect(hist2).not.toBe(hist1);
            expect(hist2.size).toBe(15);
            expect(hist2.get('H')).toBe(1);
        });

        it('should be case insensitive', () => {
            const string1 = 'Hello this is a small TEXT!';
            const hist1 = histogram(string1, {sensitive: false});

            expect(hist1 instanceof Map).toBe(true);
            expect(hist1.size).toBe(12);
            expect(hist1.get('h')).toBe(2);
            expect(hist1.get('e')).toBe(2);
            expect(hist1.get('l')).toBe(4);
            expect(hist1.get('o')).toBe(1);
            expect(hist1.get(' ')).toBe(5);
            expect(hist1.get('t')).toBe(3);
            expect(hist1.get('i')).toBe(2);
            expect(hist1.get('s')).toBe(3);
            expect(hist1.get('a')).toBe(2);
            expect(hist1.get('m')).toBe(1);
            expect(hist1.get('x')).toBe(1);
            expect(hist1.get('!')).toBe(1);
        });

        it('should limit histogram to specified characters', () => {
            const string = 'AAABCDEFACBBFabcdef';
            const hist = histogram(string, { list: ['A', 'C', 'E', 'G']});

            expect(hist instanceof Map).toBe(true);
            expect(hist.size).toBe(5);
            expect(hist.get('A')).toBe(4);
            expect(hist.get('B')).toBe(undefined);
            expect(hist.get('C')).toBe(2);
            expect(hist.get('D')).toBe(undefined);
            expect(hist.get('E')).toBe(1);
            expect(hist.get('F')).toBe(undefined);
            expect(hist.get('G')).toBe(0);
            expect(hist.get('')).toBe(12);
        });

        it('should limit histogram case insensitively', () => {
            const string = 'AAABCDEFACBBFabcdef';
            const hist = histogram(string, { list: ['A', 'C', 'E', 'G'], sensitive: false });

            expect(hist instanceof Map).toBe(true);
            expect(hist.size).toBe(5);
            expect(hist.get('A')).toBe(undefined);
            expect(hist.get('a')).toBe(5);
            expect(hist.get('b')).toBe(undefined);
            expect(hist.get('c')).toBe(3);
            expect(hist.get('d')).toBe(undefined);
            expect(hist.get('e')).toBe(2);
            expect(hist.get('f')).toBe(undefined);
            expect(hist.get('g')).toBe(0);
            expect(hist.get('')).toBe(9);
        });

        it('should build histogram with symbol containing more than 1 char', () => {
            const string = 'AAABCDEFACBBFabcdef';
            const hist = histogram(string, { list: ['A', 'C', 'E', 'G', 'AA', 'FA'] });

            expect(hist instanceof Map).toBe(true);
            expect(hist.size).toBe(7);
            expect(hist.get('A')).toBe(1);
            expect(hist.get('AA')).toBe(1);
            expect(hist.get('B')).toBe(undefined);
            expect(hist.get('C')).toBe(2);
            expect(hist.get('D')).toBe(undefined);
            expect(hist.get('E')).toBe(1);
            expect(hist.get('F')).toBe(undefined);
            expect(hist.get('FA')).toBe(1);
            expect(hist.get('G')).toBe(0);
            expect(hist.get('')).toBe(11);
        });
    });

    describe('buildDictionary', () => {
        it('should create a "one" branch tree', () => {
            const text = 'AADABCBAABDFBAABEBCADAABBAADAABDBAACABBADAABBDAAABABAADAAACAFAA';
            const hist = histogram(text);
            const tree = buildDictionary(hist);

            /*
             *   A: 32
             *   B: 16
             *   C: 4
             *   D: 8
             *   E: 1
             *   F: 2
             *
             * Expected tree:
             * 0 → A
             * 1 -- 0 → B
             *    - 1 -- 0 → D
             *         - 1 -- 0 → C
             *              - 1 -- 0 → F
             *                   - 1 → E
             */

            expect(tree instanceof Object).toBe(true);
            expect(tree.code).toBeDefined();
            expect(tree.decode).toBeDefined();
            expect(tree.code instanceof Map).toBe(true);

            const { code, decode } = tree;

            expect(code.get('A')).toEqual([0]);
            expect(decode[0]).toBe('A');

            expect(code.get('B')).toEqual([1, 0]);
            expect(decode[1][0]).toBe('B');

            expect(code.get('C')).toEqual([1, 1, 1, 0]);
            expect(decode[1][1][1][0]).toBe('C');

            expect(code.get('D')).toEqual([1, 1, 0]);
            expect(decode[1][1][0]).toBe('D');

            expect(code.get('E')).toEqual([1, 1, 1, 1, 1]);
            expect(decode[1][1][1][1][1]).toBe('E');

            expect(code.get('F')).toEqual([1, 1, 1, 1, 0]);
            expect(decode[1][1][1][1][0]).toBe('F');
        });

        it('should create a tree with characters with similar weight', () => {
            const text = 'AAABCDEFABCACBABFACDEF';
            const hist = histogram(text);
            const tree = buildDictionary(hist);

            /*
             * A: 7
             * B: 4
             * C: 4
             * D: 2
             * E: 2
             * F: 3
             *
             * Expected tree:
             * 0 -- 0 → A
             *    - 1 -- 0 -- 0 → D
             *              - 1 → E
             *         - 1 → F
             * 1 -- 0 → B
             *    - 1 → C
             */

            expect(tree instanceof Object).toBe(true);
            expect(tree.code).toBeDefined();
            expect(tree.decode).toBeDefined();
            expect(tree.code instanceof Map).toBe(true);

            const {code, decode} = tree;

            expect(code.get('A')).toEqual([0, 0]);
            expect(decode[0][0]).toBe('A');

            expect(code.get('B')).toEqual([1, 0]);
            expect(decode[1][0]).toBe('B');

            expect(code.get('C')).toEqual([1, 1]);
            expect(decode[1][1]).toBe('C');

            expect(code.get('D')).toEqual([0, 1, 0, 0]);
            expect(decode[0][1][0][0]).toBe('D');

            expect(code.get('E')).toEqual([0, 1, 0, 1]);
            expect(decode[0][1][0][1]).toBe('E');

            expect(code.get('F')).toEqual([0, 1, 1]);
            expect(decode[0][1][1]).toBe('F');
        });

        describe('add escaped symbol', () => {
            it('should add it as the less important', () => {
                const text = 'AAABCDEFABCACBABFACDEF';
                const hist = histogram(text);
                const tree = buildDictionary(hist, {addEscape: 1});

                /*
                * A: 7
                * B: 4
                * C: 4
                * D: 2
                * E: 2
                * F: 3
                * '': 1
                *
                * Expected tree:
                * -- 0 -- 0 → A
                *       - 1 -- 0 → C
                *            - 1 → F
                *  - 1 -- 0 -- 0 -- 0 → E
                *                 - 1 → ''
                *            - 1 → D
                *       - 1 → B
                */

                expect(tree instanceof Object).toBe(true);
                expect(tree.code).toBeDefined();
                expect(tree.decode).toBeDefined();
                expect(tree.code instanceof Map).toBe(true);

                const { code, decode } = tree;

                expect(code.get('A')).toEqual([0, 0]);
                expect(decode[0][0]).toBe('A');

                expect(code.get('B')).toEqual([1, 1]);
                expect(decode[1][1]).toBe('B');

                expect(code.get('C')).toEqual([0, 1, 0]);
                expect(decode[0][1][0]).toBe('C');

                expect(code.get('D')).toEqual([1, 0, 1]);
                expect(decode[1][0][1]).toBe('D');

                expect(code.get('E')).toEqual([1, 0, 0, 0]);
                expect(decode[1][0][0][0]).toBe('E');

                expect(code.get('F')).toEqual([0, 1, 1]);
                expect(decode[0][1][1]).toBe('F');

                expect(code.get('')).toEqual([1, 0, 0, 1]);
                expect(decode[1][0][0][1]).toBe('');
            });

            it('should change escaped importance', () => {
                const text = 'AAABCDEFABCACBABFACDEF';
                const hist = histogram(text);
                const tree = buildDictionary(hist, { addEscape: 3 });

                /*
                * A: 7
                * B: 4
                * C: 4
                * D: 2
                * E: 2
                * F: 3
                * '': 3
                *
                * Expected tree:
                * -- 0 -- 0 -- 0 → C
                *            - 1 -- 0 → D
                *                 - 1 → E
                *       - 1 → A
                *  - 1 -- 0 -- 0 → F
                *            - 1 → ''
                *       - 1 → B
                */

                expect(tree instanceof Object).toBe(true);
                expect(tree.code).toBeDefined();
                expect(tree.decode).toBeDefined();
                expect(tree.code instanceof Map).toBe(true);

                const { code, decode } = tree;

                expect(code.get('A')).toEqual([0, 1]);
                expect(decode[0][1]).toBe('A');

                expect(code.get('B')).toEqual([1, 1]);
                expect(decode[1][1]).toBe('B');

                expect(code.get('C')).toEqual([0, 0, 0]);
                expect(decode[0][0][0]).toBe('C');

                expect(code.get('D')).toEqual([0, 0, 1, 0]);
                expect(decode[0][0][1][0]).toBe('D');

                expect(code.get('E')).toEqual([0, 0, 1, 1]);
                expect(decode[0][0][1][1]).toBe('E');

                expect(code.get('F')).toEqual([1, 0, 0]);
                expect(decode[1][0][0]).toBe('F');

                expect(code.get('')).toEqual([1, 0, 1]);
                expect(decode[1][0][1]).toBe('');
            });


            it('should add importance in percentage', () => {
                const text = 'AAABCDEFABCACBABFACDEF';
                const hist = histogram(text);
                const tree = buildDictionary(hist, { addEscape: 0.5 });

                /*
                * A: 7
                * B: 4
                * C: 4
                * D: 2
                * E: 2
                * F: 3
                * '': 11
                *
                * Expected tree:
                * -- 0 -- 0 → ''
                *       - 1 -- 0 → B
                *            - 1 → C
                *  - 1 -- 0 → A
                *       - 1 -- 0 -- 0 → D
                *                 - 1 → E
                *            - 1 → F
                */

                expect(tree instanceof Object).toBe(true);
                expect(tree.code).toBeDefined();
                expect(tree.decode).toBeDefined();
                expect(tree.code instanceof Map).toBe(true);

                const { code, decode } = tree;

                expect(code.get('A')).toEqual([1, 0]);
                expect(decode[1][0]).toBe('A');

                expect(code.get('B')).toEqual([0, 1, 0]);
                expect(decode[0][1][0]).toBe('B');

                expect(code.get('C')).toEqual([0, 1, 1]);
                expect(decode[0][1][1]).toBe('C');

                expect(code.get('D')).toEqual([1, 1, 0, 0]);
                expect(decode[1][1][0][0]).toBe('D');

                expect(code.get('E')).toEqual([1, 1, 0, 1]);
                expect(decode[1][1][0][1]).toBe('E');

                expect(code.get('F')).toEqual([1, 1, 1]);
                expect(decode[1][1][1]).toBe('F');

                expect(code.get('')).toEqual([0, 0]);
                expect(decode[0][0]).toBe('');
            });
        });
    });

    describe('extractDictionary', () => {
        it('should generate decode from Map', () => {
            const data = new Map([
                ['A', [0, 0]],
                ['B', [0, 1]],
                ['C', [1, 0]],
                ['D', [1, 1, 0]],
                ['', [1, 1, 1]],
            ]);

            const dictionary = extractDictionary(data);

            expect(typeof dictionary).toBe('object');
            expect(typeof dictionary.decode).toBe('object');
            expect(dictionary.code instanceof Map).toBe(true);

            expect(dictionary.decode[0][0]).toBe('A');
            expect(dictionary.decode[0][1]).toBe('B');
            expect(dictionary.decode[1][0]).toBe('C');
            expect(dictionary.decode[1][1][0]).toBe('D');
            expect(dictionary.decode[1][1][1]).toBe('');
        });

        it('should generate decode from partial object', () => {
            const data = new Map([
                ['A', [0, 0]],
                ['B', [0, 1]],
                ['C', [1, 0]],
                ['D', [1, 1, 0]],
                ['', [1, 1, 1]],
            ]);

            const dictionary = extractDictionary({code: data});

            expect(typeof dictionary).toBe('object');
            expect(typeof dictionary.decode).toBe('object');
            expect(dictionary.code instanceof Map).toBe(true);

            expect(dictionary.decode[0][0]).toBe('A');
            expect(dictionary.decode[0][1]).toBe('B');
            expect(dictionary.decode[1][0]).toBe('C');
            expect(dictionary.decode[1][1][0]).toBe('D');
            expect(dictionary.decode[1][1][1]).toBe('');
        });

        it('should generate code from object', () => {
            const data = {
                0: {
                    0: 'A',
                    1: 'B',
                },
                1: {
                    0: 'C',
                    1: {
                        0: 'D',
                        1: '',
                    },
                },
            };

            const dictionary = extractDictionary(data);

            expect(typeof dictionary).toBe('object');
            expect(typeof dictionary.decode).toBe('object');
            expect(dictionary.code instanceof Map).toBe(true);

            expect(Array.from(dictionary.code)).toEqual([
                ['A', [0, 0]],
                ['B', [0, 1]],
                ['C', [1, 0]],
                ['D', [1, 1, 0]],
                ['', [1, 1, 1]],
            ]);
        });

        it('should generate code from partial object', () => {
            const data = {
                0: {
                    0: 'A',
                    1: 'B',
                },
                1: {
                    0: 'C',
                    1: {
                        0: 'D',
                        1: '',
                    },
                },
            };

            const dictionary = extractDictionary({ decode: data });

            expect(typeof dictionary).toBe('object');
            expect(typeof dictionary.decode).toBe('object');
            expect(dictionary.code instanceof Map).toBe(true);

            expect(Array.from(dictionary.code)).toEqual([
                ['A', [0, 0]],
                ['B', [0, 1]],
                ['C', [1, 0]],
                ['D', [1, 1, 0]],
                ['', [1, 1, 1]],
            ]);
        });

        it('should generate code from array', () => {
            const data = [
                ['A', 'B'],
                [
                    'C',
                    ['D', ''],
                ],
            ];

            const dictionary = extractDictionary(data);

            expect(typeof dictionary).toBe('object');
            expect(typeof dictionary.decode).toBe('object');
            expect(dictionary.code instanceof Map).toBe(true);

            expect(Array.from(dictionary.code)).toEqual([
                ['A', [0, 0]],
                ['B', [0, 1]],
                ['C', [1, 0]],
                ['D', [1, 1, 0]],
                ['', [1, 1, 1]],
            ]);
            expect(dictionary.decode[0][1]).toBe('B');
            expect(dictionary.decode[1][0]).toBe('C');
            expect(dictionary.decode[1][1][0]).toBe('D');
            expect(dictionary.decode[1][1][1]).toBe('');
        });

        describe('with string', () => {
            it('should generate dictionary from array JSON', () => {
                const data = JSON.stringify([
                    ['A', 'B'],
                    [
                        'C',
                        ['D', ''],
                    ],
                ]);

                const dictionary = extractDictionary(data);

                expect(typeof dictionary).toBe('object');
                expect(typeof dictionary.decode).toBe('object');
                expect(dictionary.code instanceof Map).toBe(true);

                expect(Array.from(dictionary.code)).toEqual([
                    ['A', [0, 0]],
                    ['B', [0, 1]],
                    ['C', [1, 0]],
                    ['D', [1, 1, 0]],
                    ['', [1, 1, 1]],
                ]);
                expect(dictionary.decode[0][1]).toBe('B');
                expect(dictionary.decode[1][0]).toBe('C');
                expect(dictionary.decode[1][1][0]).toBe('D');
                expect(dictionary.decode[1][1][1]).toBe('');
            });

            it('should generate dictionary from object JSON', () => {
                const data = JSON.stringify({
                    0: {
                        0: 'A',
                        1: 'B',
                    },
                    1: {
                        0: 'C',
                        1: {
                            0: 'D',
                            1: '',
                        },
                    },
                });

                const dictionary = extractDictionary(data);

                expect(typeof dictionary).toBe('object');
                expect(typeof dictionary.decode).toBe('object');
                expect(dictionary.code instanceof Map).toBe(true);

                expect(Array.from(dictionary.code)).toEqual([
                    ['A', [0, 0]],
                    ['B', [0, 1]],
                    ['C', [1, 0]],
                    ['D', [1, 1, 0]],
                    ['', [1, 1, 1]],
                ]);
                expect(dictionary.decode[0][1]).toBe('B');
                expect(dictionary.decode[1][0]).toBe('C');
                expect(dictionary.decode[1][1][0]).toBe('D');
                expect(dictionary.decode[1][1][1]).toBe('');
            });

            it('should generate dictionary from simplified array format', () => {
                const data = '[[A,B],[C,[D,]]]';

                const dictionary = extractDictionary(data);

                expect(typeof dictionary).toBe('object');
                expect(typeof dictionary.decode).toBe('object');
                expect(dictionary.code instanceof Map).toBe(true);

                expect(Array.from(dictionary.code)).toEqual([
                    ['A', [0, 0]],
                    ['B', [0, 1]],
                    ['C', [1, 0]],
                    ['D', [1, 1, 0]],
                    ['', [1, 1, 1]],
                ]);
                expect(dictionary.decode[0][1]).toBe('B');
                expect(dictionary.decode[1][0]).toBe('C');
                expect(dictionary.decode[1][1][0]).toBe('D');
                expect(dictionary.decode[1][1][1]).toBe('');
            });
        });
    });

    describe('exportDictionary', () => {
        it('should generate a short dictionary', () => {
            const text = 'AAABCDEFABCACBABFACDEF';
            const hist = histogram(text);
            const dico = buildDictionary(hist, { addEscape: 1 });
            const short = exportDictionary(dico);

            expect(short).toBe('[[A,[C,F]],[[[E,],D],B]]');
        });

        it('should generate a short dictionary from any format', () => {
            const text = 'AAABCDEFABCACBABFACDEF';
            const hist = histogram(text);
            const dico = buildDictionary(hist, { addEscape: 1 });
            const short1 = exportDictionary(dico);
            const short = exportDictionary(short1);

            expect(short).toBe('[[A,[C,F]],[[[E,],D],B]]');
        });

        it('should generate a short dictionary with escaped strings', () => {
            const text = 'AAABCABCACBABAC\\[],"';
            const hist = histogram(text);
            const dico = buildDictionary(hist, { addEscape: 1 });

            const short1 = exportDictionary(dico);
            expect(short1).toBe('[[A,[[[\\],\\,],[\\\\,\\[]],[\",]]],[B,C]]');

            const short = exportDictionary(short1);
            expect(short).toBe('[[A,[[[\\],\\,],[\\\\,\\[]],[\",]]],[B,C]]');
        });
    });

    describe('pack', () => {
        it('should pack simple string using default dictionary', () => {
            const text = 'AAAAABBBCCAAAAABBBCC';
            const packed = pack(text);

            expect(packed.length).toBe(21);
        });

        it('should pack simple string using given dictionary', () => {
            const text = 'AAAAABBBCCAAAAABBBCC';
            const dico = new Map([
                ['A', [0, 0]],
                ['B', [0, 1]],
                ['C', [1, 0]],
                ['', [1, 1]],
            ]);
            const packed = pack(text, {
                dictionary: {
                    code: dico,
                },
            });

            expect(packed.length).toBe(6);
        });

        it('should pack simple string', () => {
            const text = 'AAAAABBBCCAAAAABBBCC';
            const packed = pack(text, {
                computeDictionary: true,
            });

            expect(packed.length).toBe(5);
        });

        it('should embed dictionary', () => {
            const text = 'AAAAABBBCCAAAAABBBCC';
            const packed = pack(text, {
                computeDictionary: true,
                embedDictionary: true,
            });

            const hist = histogram(text);
            const dico = buildDictionary(hist, { addEscape: 0.01 });
            const strDico = exportDictionary(dico);

            expect(packed.length).toBe(5 + strDico.length + 2);
        });
    });


    describe('unpack', () => {
        it('should unpack very simple string', () => {
            const string = 'A';

            const packed = pack(string);
            const unpacked = unpack(packed);

            expect(unpacked).toBe(string);
        });

        it('should unpack simple string using default dictionary', () => {
            const string = '[{"id":0,"name":"First name"},{"id":1,"name":"The second name"}]';

            const packed = pack(string);
            const unpacked = unpack(packed);

            expect(unpacked).toBe(string);
        });

        it('should unpack simple string using given dictionary', () => {
            const text = 'AAAAABBBCCAAAAABBBCCAAAAABBBCCAAAAABBBCC';
            const dico = new Map([
                ['A', [0, 0]],
                ['B', [0, 1]],
                ['C', [1, 0]],
                ['', [1, 1]],
            ]);
            const packed = pack(text, {
                dictionary: {
                    code: dico,
                },
            });
            const unpacked = unpack(packed, {
                dictionary: {
                    code: dico,
                },
            });

            expect(unpacked).toBe(text);
        });

        it('should unpack simple string with embeded dictionary', () => {
            const text = 'AAAAABBBCC';
            const packed = pack(text, {
                computeDictionary: true,
                embedDictionary: true,
            });

            const unpacked = unpack(packed, {
                embedDictionary: true,
            });

            expect(unpacked).toBe(text);
        });

        it('should manage escaped sequence', () => {
            const text = 'ABCxCBAffBCB→';
            const dico = new Map([
                ['A', [0, 0]],
                ['B', [0, 1]],
                ['C', [1, 0]],
                ['', [1, 1]],
            ]);
            const packed = pack(text, {
                dictionary: {
                    code: dico,
                },
            });
            const unpacked = unpack(packed, {
                dictionary: {
                    code: dico,
                },
            });

            expect(unpacked).toBe(text);
        });
    });

    xdescribe('-- for information --', () => {
        const charList1 = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-+*:{}[]()!#?",. \\/@'];
        const charList2 = charList1.concat([
            /* JSON structure */
            '":"', '":[', '":{"', '":[{"', '[{', '","', '},"', '},{"', '},{', '}},', '}},"', '}}', '}]},', '}]},"',
            /* Common values */
            '":true', '":false', '":null', ':""', '00', '0,',
            /* common attributes */
            '"id":', '"name":"', '"value":',
            /* Common english bigram */
            'ss', 'ee', 'th', 'the', 'a ', 'in', 'er', 'an', 're', 'on', 'at', 'en', 'nd', 'ti', 'es', 'or', 'ed', 'is', 'it', 'al', 'ar', 'st', 'nt', 'ng', 'fi', 'ing',
        ]);

        it('Test', () => {
            const text = JSON_test;
            const textLength = text.length;

            const defaultConf = pack(text);
            const customDic = pack(text, {computeDictionary: true});

            const hist1 = histogram(text, { list: charList1 });
            const hist2 = histogram(text, { list: charList2 });
            const dico1 = buildDictionary(hist1);
            const dico2 = buildDictionary(hist2);
            const conf1 = pack(text, { dictionary: dico1 });
            const conf2 = pack(text, { dictionary: dico2 });

            // console.log(JSON.stringify(Array.from(histogram(text))));
            // console.log(JSON.stringify(Array.from(histogram(text), ([key, nb]) => ({key, nb}))));
            // console.log('dico', exportDictionary(buildDictionary(histogram(text))));
            console.log('Test JSON (default):', 100 - (defaultConf.length * 100 / textLength));
            console.log('Test JSON (own dictionary):', 100 - (customDic.length * 100 / textLength));
            // console.log('Big JSON (dictionary 1):', 100 - (conf1.length * 100 / textLength));
            console.log('not found:', hist2.get(''));
            console.log('--- Test JSON (dictionary 2):', 100 - (conf2.length * 100 / textLength));
        });

        it('Chrono', () => {
            const text = JSON_chrono;
            const textLength = text.length;

            const defaultConf = pack(text);
            const customDic = pack(text, { computeDictionary: true });


            const hist1 = histogram(text, {list: charList1});
            const hist2 = histogram(text, {list: charList2});
            const dico1 = buildDictionary(hist1);
            const dico2 = buildDictionary(hist2);
            const conf1 = pack(text, { dictionary: dico1 });
            const conf2 = pack(text, { dictionary: dico2 });

            // console.log(JSON.stringify(Array.from(histogram(text))));
            // console.log(JSON.stringify(Array.from(histogram(text), ([key, nb]) => ({ key, nb }))));
            // console.log('dico', exportDictionary(buildDictionary(histogram(text))));
            console.log('CHRONO JSON (default):', 100 - (defaultConf.length * 100 / textLength));
            console.log('CHRONO JSON (own dictionary):', 100 - (customDic.length * 100 / textLength));
            // console.log('CHRONO JSON (dictionary 1):', 100 - (conf1.length * 100 / textLength));
            console.log('not found:', hist2.get(''));
            console.log('--- CHRONO JSON (dictionary 2):', 100 - (conf2.length * 100 / textLength));
        });

        it('Big one', () => {
            const text = JSON_BIG;
            const textLength = text.length;

            const defaultConf = pack(text);
            const customDic = pack(text, { computeDictionary: true });


            const hist1 = histogram(text, { list: charList1 });
            const hist2 = histogram(text, { list: charList2 });
            const dico1 = buildDictionary(hist1);
            const dico2 = buildDictionary(hist2);
            const conf1 = pack(text, { dictionary: dico1 });
            const conf2 = pack(text, { dictionary: dico2 });

            // console.log(JSON.stringify(Array.from(histogram(text))));
            // console.log(JSON.stringify(Array.from(histogram(text), ([key, nb]) => ({ key, nb }))));
            // console.log('dico', exportDictionary(dico2));
            console.log('BIG JSON (default):', 100 - (defaultConf.length * 100 / textLength));
            console.log('BIG JSON (own dictionary):', 100 - (customDic.length * 100 / textLength));
            // console.log('BIG JSON (dictionary 1):', 100 - (conf1.length * 100 / textLength));
            console.log('not found:', hist2.get(''));
            console.log('--- BIG JSON (dictionary 2):', 100 - (conf2.length * 100 / textLength));
        });
    });
});
