import { dirname } from 'path';
import { readFileSync } from 'fs';
import parse_rdf from '../lib/parse_rdf.mjs';
import { fileURLToPath } from 'url';
import { waitForDebugger } from 'inspector';

import { describe, it } from 'mocha';
import { expect } from 'chai';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rdf = readFileSync(`${__dirname}/pg132.rdf`);

waitForDebugger();
debugger;

describe('parse_rdf', () => {
  it('should be a function', () => {
    expect(parse_rdf).to.be.a('function');
  });

  it('should parse rdf content', () => {
    const book = parse_rdf(rdf);

    expect(book).to.be.an('object');
    expect(book).to.have.a.property('id', 132);
    expect(book).to.have.a.property('title', 'The Art of War');

    expect(book)
      .to.have.a.property('authors')
      .that.is.an('array')
      .with.lengthOf(2)
      .and.contains('Sunzi, active 6th century B.C.')
      .and.contains('Giles, Lionel');

    expect(book)
      .to.have.a.property('subjects')
      .that.is.an('array')
      .with.lengthOf(2)
      .and.contains('Military art and science -- Early works to 1800')
      .and.contains('War -- Early works to 1800');
  });
});
