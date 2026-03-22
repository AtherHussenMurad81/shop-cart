import Container from "@/components/Container";
import { Button } from "@/components/ui/button";
import React from "react";

const Home = () => {
  return (
    <Container className=" bg-shop_light_pink">
      <h2 className="text-xl font-semibold">Home</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
        doloremque mollitia, accusamus iste inventore et modi dolore architecto,
        est amet molestiae quae impedit libero fuga deserunt maxime
        necessitatibus perspiciatis quas. Atque unde excepturi voluptates ea,
        delectus error molestias itaque facere reiciendis quis saepe molestiae
        architecto quaerat consectetur nisi, earum impedit.
      </p>
      <Button variant={"destructive"}>Check Out</Button>
    </Container>
  );
};
export default Home;
