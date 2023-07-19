import { TitleTypes, HeaderType } from "./title.types";

const renderHeader = (headerType:HeaderType, content:string) => {
    switch(headerType){
        case HeaderType.H1:
            return <h1 data-testid={`title-${HeaderType[headerType]}`}>{content}</h1>;
        case HeaderType.H2:
            return <h2 data-testid={`title-${HeaderType[headerType]}`}>{content}</h2>;
        case HeaderType.H3:
            return <h3 data-testid={`title-${HeaderType[headerType]}`}>{content}</h3>;
        case HeaderType.H4:
            return <h4 data-testid={`title-${HeaderType[headerType]}`}>{content}</h4>;
        case HeaderType.H5:
            return <h5 data-testid={`title-${HeaderType[headerType]}`}>{content}</h5>;
        case HeaderType.H6:
            return <h6 data-testid={`title-${HeaderType[headerType]}`}>{content}</h6>;

    }
}

const Title = ({content, headerType}: TitleTypes): JSX.Element => {
    return <>
       {renderHeader(headerType, content)}
    </>

}
export default Title;