interface AnimationPropsInterface{
    opacity?: Number;
    x?: Number;
    y?:Number
}

interface AnimationInterface {
    initial: AnimationPropsInterface,
    animate: AnimationPropsInterface,
    exit: AnimationPropsInterface
}

export default AnimationInterface