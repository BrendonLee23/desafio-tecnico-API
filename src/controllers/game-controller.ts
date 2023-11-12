import { gameService } from '@/services/game-service';
import { CreateGame } from './../protocols';
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getGames(req: Request, res: Response) {
    const games = await gameService.getGames()
    res.status(httpStatus.OK).send(games);
}

export async function postGames(req: Request, res: Response) {
    const gameBody = req.body as CreateGame;
    const game = await gameService.postGame( gameBody );
    res.status(httpStatus.OK).send(game);
}