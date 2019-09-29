import * as React from "react";
import { render } from "react-dom";

import "./styles.css";

type TreeNode = {
  id: string;
  children?: TreeNode[];
};

type TreeNodeProps = { node: TreeNode; i: number };

const genRandomId = () => `${Math.floor(Math.random() * 100000000) + 1}`;

const tree: TreeNode = {
  id: genRandomId(),
  children: [
    { id: genRandomId(), children: [{ id: genRandomId() }] },
    {
      id: genRandomId(),
      children: [
        {
          id: genRandomId(),
          children: Array.from({ length: 2 }).map(() => ({
            id: genRandomId()
          }))
        }
      ]
    }
  ]
};

const TreeNode = ({ node, i = 0 }: TreeNodeProps) => {
  return (
    <>
      <li key={node.id} description="Some bullshit">
        {node.id}
        {!!node.children && node.children.length
          ? node.children.map(child => (
              <ul>
                <TreeNode i={i + 1} node={child} />
              </ul>
            ))
          : ""}
      </li>
    </>
  );
};

TreeNode.defaultProps = {
  node: {},
  i: 0
};

function App() {
  return (
    <>
      <h2>head</h2>
      <ul className="tree">
        <TreeNode node={tree} />
      </ul>
    </>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
