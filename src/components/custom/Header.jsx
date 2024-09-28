import React from "react";
import { Button } from "@/components/ui/button";
function Header() {
  return (
    <div className="p-2 shadow-sm">
      <img src="/logo.svg" alt="logos" />
      <div>
        <Button>Sign In</Button>
      </div>
    </div>
  );
}

export default Header;
Header;
