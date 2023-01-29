#!/usr/bin/env bash

# This scripts cleans all node_modules for all projects

if [[ -d ./node_modules ]]; then rm -rf ./node_modules; fi

# CONFIG
if [[ -d ./config/eslint/node_modules ]]; then rm -rf ./config/eslint/node_modules; fi
if [[ -d ./config/tsconfig/node_modules ]]; then rm -rf ./config/tsconfig/node_modules; fi
if [[ -d ./config/prettier/node_modules ]]; then rm -rf ./config/prettier/node_modules; fi

if [[ -d ./pnpm-lock.yaml ]]; then rm  ./pnpm-lock.yaml; fi
if [[ -d ./yarn.lock ]]; then rm  ./yarn.lock; fi
