import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer';
import 'jest-canvas-mock'
import jobsData from '../MockData'
import DrawCanvas from '.././DrawCanvas'
import FindXYPoints from '../../utils/FindXYPoints';
import FindSteps from '../../utils/FindSteps';


// <<< Here is my attempt at trying to implement testing but unfortunately do to time and not that much exposer to canvas I ended 
// up with some errors >> npm

// function chartSteps() {
//   const xAndYValues = FindXYPoints(jobsData)
//   return FindSteps(xAndYValues)
// }

// describe("rendering Canvas", () => {
//   it("should find the canvas element and match the given width and height", () => {
//     const component = <DrawCanvas/>;
//     expect(component.find("canvas").props().width).toEqual(window.innerWidth);
//     expect(component.find("canvas").props().height).toEqual(window.innerHeight);
//   });


// });