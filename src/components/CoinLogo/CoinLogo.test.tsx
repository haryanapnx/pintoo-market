import { render, screen } from "@testing-library/react";
import CoinLogo from "./CoinLogo";

describe("CoinLogo Component",()=>{
    test("should render the coin logo", () => {
        render(<CoinLogo logoSrc="https://example.com/logo.png" backgroundColor="red" />);
        const coinLogo = screen.getByTestId("coin-logo");
        expect(coinLogo).toBeInTheDocument();
    })

    test("should render the coin logo with the correct background color", () => {
        render(<CoinLogo logoSrc="https://example.com/logo.png" backgroundColor="red" />);
        const coinLogo = screen.getByTestId("coin-logo");
        expect(coinLogo).toHaveStyle("background-color: red");
    })
})