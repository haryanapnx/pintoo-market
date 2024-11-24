import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("should render the button with the correct label", () => {
    render(<Button label="Label button" onClick={() => {}} />);
    expect(screen.getByText("Label button")).toBeInTheDocument();
  });

  test("should trigger onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<Button label="Submit" onClick={handleClick} />);
    fireEvent.click(screen.getByText("Submit"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
