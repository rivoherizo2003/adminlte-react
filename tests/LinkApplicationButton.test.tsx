import { render, screen } from "@testing-library/react"
import React from "react"
import LinkApplicationButton from "../src/components/link/LinkApplicationButton"

describe('Link application button', () => { 
    it("We should create a link button", () => {
        render(<LinkApplicationButton>test link</LinkApplicationButton>)
        const linkButton = screen.getByText("test link")
        expect(linkButton).toBeInTheDocument()
        expect(linkButton).toHaveClass('btn btn-app')
    })
 })