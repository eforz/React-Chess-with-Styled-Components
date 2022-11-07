import { Cell } from './../models/ClassCell';

export interface ICellComponentProps {
    backgr?: string;
    cell: Cell;
    available?: any;
    selected?: boolean;
    primary?: boolean;
    click: (cell: Cell) => void;
  }