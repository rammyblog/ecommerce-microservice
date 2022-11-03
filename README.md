<h1 align="center"> Ecommerce Microservice </h1> <br>




## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Requirements](#requirements)
- [Quickstart](#quick-start)
- [API](#documentation)




## Introduction


This project is an Ecommerce web application with its backend architecture implemented in a microservice pattern with a monolithic frontend. 

## Features
Here are some of the features:

- User authentication
- Users can make payment in a seamless manner
- Uses JWT(Json Web Tokens) for Authorization Tokens
- Add products to cart in a seamless manner
- Built using well established tools - Node, GraphQL, JWT, React
- Users can complete an order within seconds

## Tech Stack
- Node
- GraphQL
- Docker
- Kafka
- Zookeeper
- React

## Quick Start

The goal of this quick start is to get a working application quickly up and running.
to start a dockerized version of the ecommerce microservice you can do the following:

1- Change directory into the api-gateway and run

```
docker-compose up -d
``` 

2- Change directory into the product-service and run

```
docker-compose up -d
``` 
``` 

3- Change directory into the order-service and run

```
docker-compose up -d
```
Finally, 

4- Change directory into the payment-service and run

```
docker-compose up -d
``` 
wait for all services to be up. It takes few seconds)


## API
https://documenter.getpostman.com/view/11352997/UzBtnPbv
