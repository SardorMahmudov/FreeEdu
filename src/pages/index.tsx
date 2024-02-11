import { useState } from "react";
import { Button, Card, Heading, Input, Rating, Tag, Text, TextArea } from "../components";
import { withLayout } from "../layout/layout";
import { GetServerSideProps } from "next";
import axios from "axios";
import { MenuItem } from "../interfaces/menu.interface";

const Index = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Heading tag="h1">Hello</Heading>
      <Text size="s">Text</Text>
      <Tag size="m" color="green">
        Green
      </Tag>
      <br />
      <Button appearance="primary">Primary</Button>
      <Button appearance="ghost">Ghost</Button>
      <Button appearance="ghost" arrow={isClick ? "down" : "right"} onClick={() => setIsClick((prev) => !prev)}>
        Arrow
      </Button>
      <Button appearance="primary" arrow="down">
        Down
      </Button>

      <Input placeholder="Enter" />
      <div>
        <TextArea placeholder="Message" />
      </div>

      <br />
      <Rating rating={rating} isEditabled={true} setRating={setRating} />

      <Card color="white" style={{ marginTop: "30px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt delectus ipsum accusantium. Quaerat necessitatibus
        laborum cum quis veniam. Eveniet?
      </Card>
      <Card color="primary" style={{ marginTop: "30px" }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sunt delectus ipsum accusantium. Quaerat necessitatibus
        laborum cum quis veniam. Eveniet?
      </Card>
    </>
  );
};

export default withLayout(Index);

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, { firstCategory });
  return {
    props: {
      firstCategory,
      menu,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  firstCategory: number;
  menu: MenuItem[];
}
