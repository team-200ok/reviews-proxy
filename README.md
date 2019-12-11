# Project Name

> Proxy server to host all four YumNoms components. Proxy built by Jessica Bainbridge-Smith

## Related Projects

  - https://github.com/yumnoms/reviews-service
  - https://github.com/yumnoms/popular-dishes-service
  - https://github.com/yumnoms/reservations-service
  - https://github.com/yumnoms/photo-carousel-service

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Requires access to each of the four individual repos (see Related Projects).  Follow the instructions inside each individual readme to run those servers, and then run the proxy server.

To run:
- Install dependencies using `npm install`
- Run individual component servers (may require setting up and seeding databases)
- Run this proxy server using `npm start`

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

