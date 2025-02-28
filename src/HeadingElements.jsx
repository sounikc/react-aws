import Element from "./Element";

const HeadingElements = () => {
    return (
        <>
            <Element tag="h1" text="This is h1 heading" />
            <Element tag="h2" text="This is sub heading" />
            <Element tag="strong" text="This is bold element" />
        </>
    )
}

export default HeadingElements;