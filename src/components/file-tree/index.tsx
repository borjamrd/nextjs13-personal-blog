"use client";

import {
  BsFolderMinus,
  BsReverseLayoutTextWindowReverse,
  BsFolderPlus,
  BsFileEarmark,
  BsBox,
} from "react-icons/bs";
import React, { PropsWithChildren, useState } from "react";
import styles from "./file-tree.module.css";
import Link from "next/link";
// import Link from '@components/link'

type FileProps = {
  type: string;
  name: string;
  note?: string;
  url?: string;
};

type FolderProps = {
  name: string;
  children?: Array<React.ReactElement<FolderProps | FileProps>>;
  open?: boolean;
  note?: string;
};

type FileTreeProps = {
  children: React.ReactNode | Array<React.ReactNode>;
};

const Folder: React.FC<FolderProps> = ({ name, children, open, note }) => {
  const [isOpen, setIsOpen] = useState(open);
  const [isFocused, setIsFocused] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      setIsOpen(!isOpen);
    }
  };

  const handleFocus = (event: React.FocusEvent<HTMLAnchorElement>) => {
    event.currentTarget.classList.add(styles.focused);
    setIsFocused(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLAnchorElement>) => {
    event.currentTarget.classList.remove(styles.focused);
    setIsFocused(false);
  };

  return (
    <li
      role="treeitem"
      aria-expanded={isOpen}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      aria-selected={isFocused}
    >
      <a
        onClick={handleClick}
        onFocus={handleFocus}
        onBlur={handleBlur}
        role="button"
        tabIndex={-1}
        aria-label={
          isOpen ? `Collapse ${name} folder` : `Expand ${name} folder`
        }
      >
        <div>
          {isOpen ? (
            <BsFolderMinus className="text-white" fill="none" aria-hidden />
          ) : (
            <BsFolderPlus className="text-white" fill="none" aria-hidden />
          )}
          <span>
            {name}
            <span className="sr-only">
              , {isOpen ? "open" : "closed"} folder
            </span>
            <span className={styles.note}>{note}</span>
          </span>
        </div>
      </a>
      {isOpen && (
        <ul className={styles["folder-children"]} role="group">
          {Array.isArray(children) ? (
            children.map((child, index) => (
              <React.Fragment key={index}>{child}</React.Fragment>
            ))
          ) : (
            <React.Fragment>{children}</React.Fragment>
          )}
        </ul>
      )}
    </li>
  );
};

const File: React.FC<FileProps> = ({ type, name, note, url: link }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = (event: React.FocusEvent<HTMLLIElement>) => {
    event.currentTarget.classList.add(styles.focused);
    setIsFocused(true);
  };

  const handleBlur = (event: React.FocusEvent<HTMLLIElement>) => {
    event.currentTarget.classList.remove(styles.focused);
    setIsFocused(false);
  };

  const Wrapper = ({ children }: PropsWithChildren) =>
    link ? (
      <Link href={link}>
        <span className="sr-only">{type} file:</span>
        {children}
      </Link>
    ) : (
      <>{children}</>
    );

  function getIcon() {
    switch (type) {
      case "layout":
        return <BsReverseLayoutTextWindowReverse />;
      case "component":
        return <BsBox />;

      case "page":
        return <BsFileEarmark />;
      default:
        return <BsFileEarmark />;
    }
  }
  return (
    <li
      role="treeitem"
      aria-selected={isFocused}
      onFocus={handleFocus}
      onBlur={handleBlur}
    >
      <div className={styles.file} tabIndex={0}>
        {getIcon()}
        <Wrapper>
          <span className={styles["file-name"]}>
            {name}
            <span className={styles.note}>{note}</span>
          </span>
        </Wrapper>
      </div>
    </li>
  );
};

const FileTree: React.FC<FileTreeProps> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles.fileTree} role="tree">
        {Array.isArray(children)
          ? children.map((child, index) => (
              <React.Fragment key={index}>{child}</React.Fragment>
            ))
          : children}
      </ul>
    </div>
  );
};

export { Folder, File, FileTree };
