import {InfoCourse} from "./InfoCourse";
import {render} from "@testing-library/react";

describe('render info card',  () =>{
    it('should render component', function () {
        render(<InfoCourse id={'1'} />)

    });
});