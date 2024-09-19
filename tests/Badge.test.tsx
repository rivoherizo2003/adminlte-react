import React from "react"
import { render, screen } from "@testing-library/react"
import { Badge } from "../src/components/badges/Badge"

describe('Badge component', () => { 
    it('We should create a badge component', () => {
        render(<Badge classes="badge-danger" label="199"></Badge>)
        const badgeElement = screen.getByText('199')
        expect(badgeElement).toBeInTheDocument()
        expect(badgeElement).toHaveClass('badge badge-danger')
    })
 })