import React from "react";
import { render } from "storyblok-rich-text-react-renderer";
import { StoryblokComponent } from "@storyblok/react/rsc";

const RichTextRenderer = ({ blok }: any) => {
    console.log(blok,'blok')
    return (
        <div className="">
          {render(blok)}
        </div>
    );
};

export default RichTextRenderer;
