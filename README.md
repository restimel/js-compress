# js-compress
A tool to shorten strings (mainly JSON) and reduce their weight for transport or storage

## Purpose
Create a simple package to compress strings in order to send compressed string or to store them with minimal size.

## Features

* Allow to compress string
    * Support all UTF8 characters
    * Use a common dictionary
    * Allow to create a dedicated dictionary
    * Allow to use a defined dictionary
    * Supports characters which are not in given dictionary
* Allow to unpack with all previous options

### secondary features

* Generate character histogram from string
    * possibility to count only some characters
    * possibility to use string of several characters (then they are not count as single characters)
* Generate Huffman dictionary from histogram

## Example

```
import {
    pack,
    unpack,
} from 'js-compress';

const exampleObj = {
    a: 42,
    b: 'foo',
    c: {
        d: ['bar', 'baz'],
    },
};
const json = JSON.stringify(exampleObj);

const compressed = pack(json);
const originalStr = unpack(compressed);

originalStr === json;
```
