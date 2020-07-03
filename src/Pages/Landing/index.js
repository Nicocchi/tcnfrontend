import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HeaderBox from "../../Components/HeaderBox";
import MediaBox from '../../Components/MediaBox';
import "./Landing.scss";
import MediaBoxAlt from '../../Components/MediaBoxAlt';

export default class landing extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <h1>Landing</h1>
                <section style={{marginTop: "40px"}}>
                    <HeaderBox value="Recents" />
                    <div className="recents-box">
                    <MediaBox width="340px" date="1/01/2020" category="Sports" title="Quam risus velit in a purus nisi urna" content="lorum ipsum velit in a purus" author="Jane Doe" />
                    <MediaBox width="340px" date="1/01/2020" category="Sports" title="Quam risus velit in a purus nisi urna" content="lorum ipsum velit in a purus" author="Jane Doe" />
                    <MediaBox width="240px" date="1/01/2020" category="Sports" title="Quam risus velit in a purus nisi urna" content="lorum ipsum velit in a purus" author="Jane Doe" />
                    <MediaBox width="240px" date="1/01/2020" category="Sports" title="Quam risus velit in a purus nisi urna" content="lorum ipsum velit in a purus" author="Jane Doe" />
                    <MediaBox width="240px" date="1/01/2020" category="Sports" title="Quam risus velit in a purus nisi urna" content="lorum ipsum velit in a purus" author="Jane Doe" />
                    </div>
                </section>
                <section style={{marginTop: "40px"}}>
                    <HeaderBox value="Sports" />
                    <div className="recents-box">
                    <MediaBox width="240px" date="1/01/2020" category="Sports" title="Quam risus velit in a purus nisi urna" content="lorum ipsum velit in a purus" author="Jane Doe" />
                    <MediaBox width="240px" date="1/01/2020" category="Sports" title="Quam risus velit in a purus nisi urna" content="lorum ipsum velit in a purus" author="Jane Doe" />
                    <MediaBox width="240px" date="1/01/2020" category="Sports" title="Quam risus velit in a purus nisi urna" content="lorum ipsum velit in a purus" author="Jane Doe" />
                    </div>
                </section>
                <div className="landing-columns">
                <section style={{marginTop: "40px"}}>
                    <HeaderBox value="Food" />
                    <div className="recents-box">
                    <MediaBox width="100%" date="1/01/2020" category="Sports" title="Quam risus velit in a purus nisi urna" content="lorum ipsum velit in a purus" author="Jane Doe" />
                    <MediaBoxAlt width="100%" date="1/01/2020" category="Sports" title="Quam risus velit in a purus nisi urna" content="lorum ipsum velit in a purus" author="Jane Doe" />
                    <MediaBoxAlt width="100%" date="1/01/2020" category="Sports" title="Quam risus velit in a purus nisi urna" content="lorum ipsum velit in a purus" author="Jane Doe" />
                    </div>
                </section>
                <section style={{marginTop: "40px"}}>
                    <HeaderBox value="Entertainment" width="170px" />
                    <div className="recents-box">
                    <MediaBox width="100%" date="1/01/2020" category="Sports" title="Quam risus velit in a purus nisi urna" content="lorum ipsum velit in a purus" author="Jane Doe" />
                    <MediaBoxAlt width="100%" date="1/01/2020" category="Sports" title="Quam risus velit in a purus nisi urna" content="lorum ipsum velit in a purus" author="Jane Doe" />
                    <MediaBoxAlt width="100%" date="1/01/2020" category="Sports" title="Quam risus velit in a purus nisi urna" content="lorum ipsum velit in a purus" author="Jane Doe" />
                    </div>
                </section>
                </div>
            </div>
        )
    }
}
