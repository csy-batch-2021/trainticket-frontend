const {TicketAPI} = require('ticket-api-client/TicketApi');

//import {TicketAPI}  from 'ticket-api-client/TicketApi';

const ticketAPI = new TicketAPI();
let trains = ticketAPI.search("Chennai Central","Bangalore","2021-02-02");
console.log(trains);