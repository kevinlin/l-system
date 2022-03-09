import './App.css';
import Turtle from 'react-turtle'
import {produce} from './FractalTree'

function App() {

    const command = produce('0', 5);

    // const command = '1[0]1'
    console.log('command:', command);

    return (
        <div className="App">
            <Turtle width={1000} height={2000} draw={(turtle) => {
                turtle.left(90);
                const stack = [];
                command.split('').map(c => {
                    console.log({
                        x: turtle.x,
                        y: turtle.y,
                        heading: turtle.heading
                    });
                    switch (c) {
                        case '0':
                            console.log('0');
                            turtle.forward(8);
                            turtle.stroke();
                            break;
                        case '1':
                            console.log('1')
                            turtle.forward(16);
                            turtle.stroke();
                            break;
                        case '[':
                            console.log('[');
                            const state = {
                                x: turtle.x,
                                y: turtle.y,
                                heading: turtle.heading
                            };
                            stack.push(state);
                            // turtle.save();
                            turtle.left(45);
                            break;
                        case ']':
                            const { x, y, heading} = stack.pop();
                            console.log('] begin', x, y, heading)
                            //turtle.penup()
                            turtle.setPosition(x, y);
                            //turtle.pendown();
                            turtle.setheading(heading);
                            // turtle.pendown()
                            turtle.right(45);
                            console.log('] end', {
                                x: turtle.x,
                                y: turtle.y,
                                heading: turtle.heading
                            });
                            break;
                    }
                });
                console.log({
                    x: turtle.x,
                    y: turtle.y,
                    heading: turtle.heading
                });

                // turtle.stroke();
            }}/>
        </div>
    );
}

export default App;
