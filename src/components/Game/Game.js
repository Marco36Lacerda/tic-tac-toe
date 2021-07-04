import React, { useState } from 'react';
import { Board } from '../Board/Board'
import { ResultModal } from '../ResultModal/ResultModal';
import { calculateWinner } from '../../utils/WinnerCalculator';
import './Game.css';

export const Game = () => {


    const [cellValues, setCellValues] = useState(['', '', '', '', '', '', '', '', '']);
    const [xIsNext, setXIsNext] = useState(true);
    const [isGameOver, setIsGameOver] = useState(false);
    const [numberTurnsLeft, setNumberTurnsLeft] = useState(9);
    const [winner, setWinner] = useState();
    const [winningCombination, setWinningCombination] = useState([]);

    const cellIsEmpty = (cellIndex) => cellValues[cellIndex] === '';

    const restartGame = () => {

        setCellValues(['', '', '', '', '', '', '', '', '']);
        setXIsNext(true);
        setNumberTurnsLeft(9);
        setIsGameOver(false);
        setWinner(undefined);
        setWinningCombination([])

    }

    const onCellClicked = (cellIndex) => {
        if (cellIsEmpty(cellIndex)) {
            const newCellValues = [...cellValues];
            newCellValues[cellIndex] = xIsNext ? 'X' : 'O';

            const newNumberTurnsLeft = numberTurnsLeft - 1;

            // calculate the result
            const calcResult = calculateWinner(newCellValues, newNumberTurnsLeft, cellIndex);


            setCellValues(newCellValues);
            setXIsNext(!xIsNext);
            setNumberTurnsLeft(newNumberTurnsLeft);
            setIsGameOver(calcResult.hasResult);
            setWinner(calcResult.winner);
            setWinningCombination(calcResult.winningCombination);
        }
    }
    return (
        <>
            <div id="game">
                <h1>Tic Tac Toe</h1>
                <Board
                    cellValues={cellValues}
                    winningCombination={winningCombination}
                    cellClicked={onCellClicked} />
            </div>

            <ResultModal
                isGameOver={isGameOver}
                winner={winner}
                onNewGameClicked={restartGame} />
        </>
    );
}