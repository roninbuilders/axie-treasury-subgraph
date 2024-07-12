# Axie Treasury subgraph
This document provides instructions for setting up and running the Axie Treasury subgraph.

## Installation
`npm install -g @graphprotocol/graph-cli@latest` to install the graph-cli.

`export ETHEREUM='mainnet:http://RPC_URL'` to set the RPC_URL.

`docker compose up` to run the subgraph.

`graph codegen && graph build` to generate the subgraph.

`npm run create-local` to create the subgraph.

` npm run deploy-local` to deploy the subgraph.

`http://localhost:8000/subgraphs/name/axie-treasury-subgrpah` to access the subgraph.
