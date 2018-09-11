import React from 'react';
import { Row, Col, Card } from 'antd';
import EchartsToggle from "./EchartsToggle";
import EchartsArea from './EchartsArea';
import EchartsPie from './EchartsPie';
import EchartsEffectScatter from './EchartsEffectScatter';
import EchartsForce from './EchartsForce';

class Echarts extends React.Component {
    render() {
        return (
            <div className="gutter-example">

                <Row >
                    <Col className="gutter-row" >
                        <div className="gutter-box">
                            <Card title="关系图" bordered={false}>
                                {/*<EchartsGraphnpm />*/}
                                {/*<EchartsForce />*/}
                                <EchartsToggle/>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Echarts;