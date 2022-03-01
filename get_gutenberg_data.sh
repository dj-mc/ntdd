#!/usr/bin/env bash

mkdir -p data/
wget -P data/ \
    http://www.gutenberg.org/cache/epub/feeds/rdf-files.tar.bz2
# Warning: fully extracted tar has 100,000+ items, adding up to ~1GB
tar -xvjf data/rdf-files.tar.bz2 -C data/
