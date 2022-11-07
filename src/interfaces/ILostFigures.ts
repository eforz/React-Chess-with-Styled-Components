import { Figure } from "../models/figures/ClassFigure";

export interface ILostFigures {
    title?: string;
    figures?: Figure[];
    children?: React.ReactNode;

}