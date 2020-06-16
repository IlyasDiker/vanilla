/*
 * @author Stéphane LaFlèche <stephane.l@vanillaforums.com>
 * @copyright 2009-2019 Vanilla Forums Inc.
 * @license GPL-2.0-only
 */

import { dropDownClasses } from "@library/flyouts/dropDownStyles";
import DropDownItem from "@library/flyouts/items/DropDownItem";
import ModalLink from "@library/modal/ModalLink";
import SmartLink from "@library/routing/links/SmartLink";
import classNames from "classnames";
import { LocationDescriptor } from "history";
import React from "react";
import { CheckIcon, DropDownMenuIcon, CheckCompactIcon } from "@library/icons/common";
import { useLayout } from "@library/layout/LayoutContext";

export interface IDropDownItemLink {
    to: LocationDescriptor;
    name?: string;
    children?: React.ReactNode;
    className?: string;
    lang?: string;
    isChecked?: boolean;
    isActive?: boolean;
}

/**
 * Implements link type of item for DropDownMenu
 */
export default class DropDownItemLink extends React.Component<IDropDownItemLink> {
    public render() {
        const { children, name, className, to } = this.props;
        const linkContents = children ? children : name;
        const { mediaQueries } = useLayout();
        const classes = dropDownClasses({ mediaQueries });
        return (
            <DropDownItem className={classNames(className, classes.item)}>
                <SmartLink
                    to={to}
                    title={name}
                    lang={this.props.lang}
                    className={classNames(classes.action, this.props.isActive && classes.actionActive)}
                >
                    {linkContents}
                    {this.props.isChecked && <CheckCompactIcon className={classes.check} aria-hidden={true} />}
                </SmartLink>
            </DropDownItem>
        );
    }
}
