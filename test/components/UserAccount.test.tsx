import React from "react";
import { it, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";

import UserAccount from "../../src/components/UserAccount";
import { User } from "../../src/entities";

// Sample mock user data
const regularUser: User = { id: 1, name: "Bob", isAdmin: false };
const adminUser: User = { id: 2, name: "Alice", isAdmin: true };

describe("UserAccount", () => {
  it("should render the user's name", () => {
    render(<UserAccount user={regularUser} />);

    const userName = screen.getByText(/bob/i);
    expect(userName).toBeInTheDocument();
  });

  it("should render Edit button if user is admin", () => {
    render(<UserAccount user={adminUser} />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent(/edit/i);
  });

  // it("should not render edit button if user is not admin", () => {
  //   render(<UserAccount user={regularUser} />);

  //   const button = screen.queryByText("Edit");
  //   expect(button).not.toBeInTheDocument();
  // });
});
