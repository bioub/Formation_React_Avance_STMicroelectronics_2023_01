import Counter from "../hooks/Counter";
import { withHiddenButton } from "./withHiddenButton"

const CounterWithHiddenButton = withHiddenButton(Counter);

export default CounterWithHiddenButton;