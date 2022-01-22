import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer';
import 'jest-canvas-mock'
import jobsData from '../MockData'
import DrawCanvas from '.././DrawCanvas'
import FindXYPoints from '../../utils/FindXYPoints';
import FindSteps from '../../utils/FindSteps';
import Home from '../../Home';

function chartSteps() {
  const xAndYValues = FindXYPoints(jobsData)
  return FindSteps(xAndYValues)
}

describe("rendering Canvas", () => {
  it("should find the canvas element and match the given width and height", () => {
    const component = <Home/>;
    expect(component.find("canvas").props().width).toEqual(window.innerWidth);
    expect(component.find("canvas").props().height).toEqual(window.innerHeight);
  });

  // it("should catch the color elements to be unique and 32768 in count", () => {
  //   const wrapper = mount(<App />);
  //   const arr = [...new Set(wrapper.find("#unique-colors").props().value)];
  //   expect(arr.length).toEqual(32768);
  // });
});

// test('should render avatar component', () => {
//   render(
//     <DrawCanvas steps={chartSteps()} jobsData={jobsData} />
//   )
//   const drawCanvas = screen.getByTestId('canvas')
//   expect(drawCanvas).totoContainHTML('canvas')
// })
{/* <DrawCanvas steps={test()} jobsData={jobsData} /> */}