import React from 'react';
import Topbar from './Topbar';
import ContentRowTop from './ContentRowTop';
import Footer from './Footer';


function ContentWrapper() {
    return (
        <div id="content-wrapper" class="d-flex flex-column">

            <div id="content">
                <Topbar />   
                <ContentRowTop />
            </div>

            <Footer />

      </div>
    );
}

export default ContentWrapper;