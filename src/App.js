import './App.css';
import Turtle from 'react-turtle'
import {produce} from './FractalTree'

function App() {
    const command = produce('0', 5);
    console.log('command:', command);

    return (
        <div className="App">
            <Turtle width={500} height={500} draw={(turtle) => {
                turtle.penup();
                turtle.setPosition(0,250);
                turtle.pendown();
                turtle.left(90);
                const stack = [];
                command.split('').forEach(c => {
                    switch (c) {
                        case '0':
                            turtle.forward(8);
                            turtle.stroke();
                            break;
                        case '1':
                            turtle.forward(16);
                            turtle.stroke();
                            break;
                        case '[':
                            const state = {
                                x: turtle.x,
                                y: turtle.y,
                                heading: turtle.heading
                            };
                            stack.push(state);
                            turtle.left(45);
                            break;
                        case ']':
                            turtle.penup();
                            const { x, y, heading} = stack.pop();
                            turtle.setPosition(x, y);
                            turtle.pendown();
                            turtle.forward(0); // hack to pendown
                            turtle.setheading(heading);
                            turtle.right(45);
                            break;
                        default:
                            break;
                    }
                });
            }}/>
        </div>
    );
}

export default App;
