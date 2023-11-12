import { CreateParticipant } from './../protocols';
import { participantService } from "@/services/participant-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getParticipants(req: Request, res: Response) {
    const participants = await participantService.getParticipants()
    res.status(httpStatus.OK).send(participants);
}

export async function postParticipants(req: Request, res: Response) {
    const participantBody = req.body as CreateParticipant;
    const participants = await participantService.postParticipants( participantBody );
    res.status(httpStatus.OK).send(participants);
}
