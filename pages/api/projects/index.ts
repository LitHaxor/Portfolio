import { NextApiRequest, NextApiResponse } from "next";
import nc from "next-connect";
import {services} from '../../../data';
const handler = nc<NextApiRequest, NextApiResponse>()
    .get((req,res)=>{
    res.status(200).send(services)
})

export default handler;