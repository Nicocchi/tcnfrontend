import React from "react";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";

// /**
//  * Options for formatting the Rich Text Document from Contentful
//  */
export const options = {
    renderMark: {
        // [MARKS.BOLD]: text => {},
        // [MARKS.ITALIC]: text => {}
    },
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => {
        return (<p style={{width: "100%"}}>{children}</p>)
        },
        // [BLOCKS.HEADING_1]: (node, children) => {

        // },
        // [BLOCKS.HEADING_2]: (node, children) => {

        // },
        // [BLOCKS.HEADING_3]: (node, children) => {

        // },
        // [BLOCKS.HEADING_4]: (node, children) => {

        // },
        [BLOCKS.HEADING_6]: (node, children) => {
            return (
                <p style={{width: "100%", textAlign: "center", fontSize: "1.2em"}}><strong>{children}</strong></p>
            )
        },
        // [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {

        // },

        // [BLOCKS.EMBEDDED_ASSET]: (node, children) => {},
        [BLOCKS.UL_LIST]: (node, children) => {
            return (
            <div style={{marginLeft: "5%", width: "100%"}}>{children}</div>
            )
        },
        // [BLOCKS.OL_LIST]: (node, children) => {

        // },
        // [BLOCKS.LIST_ITEM]: (node, children) => {

        // },
        // [INLINES.ENTRY_HYPERLINK]: (node, children) => {

        // },
        [INLINES.EMBEDDED_ENTRY]: (node, children) => {
            if (node.data.target.sys.contentType.sys.id === "imageBox") {
                return (
                    <img src={node.data.target.fields.image.fields.file.url} alt="d" />
                )
            }
        }
    }
};