﻿import React, { Component } from 'react';

import { Row, Col } from 'reactstrap';
import { Helmet } from "react-helmet";
import FormWrapper from '../form-wrapper';

export default class MatlabKrakenTestOne extends Component {

    acousticProblemData = {
        frequency: 15,
        nModes: 40,
        nMedia: 2,
        topBCType: 'V',
        interpolationType: 'S',
        attenuationUnits: 'W',
        isVolumeAttenuatonAdded: false,
        zt: 0,
        cpt: 0,
        cst: 0,
        rhot: 0,
        apt: 0,
        ast: 0,
        bumDen: 0,
        eta: 0,
        xi: 0,
        mediumInfo: '[2000,0,5000],[300,0,5300]',
        ssp: "[0.00,1509.52,0.00,1.0300,0.00,0],\
[10.00, 1509.50, 0.00, 1.0300, 0.00, 0],\
[20.00, 1509.49, 0.00, 1.0300, 0.00, 0],\
[30.00, 1509.29, 0.00, 1.0300, 0.00, 0],\
[40.00, 1508.52, 0.00, 1.0300, 0.00, 0],\
[50.00, 1507.24, 0.00, 1.0300, 0.00, 0],\
[60.00, 1505.64, 0.00, 1.0300, 0.00, 0],\
[70.00, 1503.92, 0.00, 1.0300, 0.00, 0],\
[80.00, 1502.29, 0.00, 1.0300, 0.00, 0],\
[90.00, 1500.81, 0.00, 1.0300, 0.00, 0],\
[100.00, 1499.39, 0.00, 1.0300, 0.00, 0],\
[110.00, 1497.93, 0.00, 1.0300, 0.00, 0],\
[120.00, 1496.46, 0.00, 1.0300, 0.00, 0],\
[130.00, 1495.02, 0.00, 1.0300, 0.00, 0],\
[140.00, 1493.67, 0.00, 1.0300, 0.00, 0],\
[150.00, 1492.42, 0.00, 1.0300, 0.00, 0],\
[160.00, 1491.31, 0.00, 1.0300, 0.00, 0],\
[170.00, 1490.33, 0.00, 1.0300, 0.00, 0],\
[180.00, 1489.48, 0.00, 1.0300, 0.00, 0],\
[190.00, 1488.74, 0.00, 1.0300, 0.00, 0],\
[200.00, 1488.11, 0.00, 1.0300, 0.00, 0],\
[210.00, 1487.58, 0.00, 1.0300, 0.00, 0],\
[220.00, 1487.12, 0.00, 1.0300, 0.00, 0],\
[230.00, 1486.71, 0.00, 1.0300, 0.00, 0],\
[240.00, 1486.34, 0.00, 1.0300, 0.00, 0],\
[250.00, 1485.98, 0.00, 1.0300, 0.00, 0],\
[260.00, 1485.62, 0.00, 1.0300, 0.00, 0],\
[270.00, 1485.25, 0.00, 1.0300, 0.00, 0],\
[280.00, 1484.89, 0.00, 1.0300, 0.00, 0],\
[290.00, 1484.54, 0.00, 1.0300, 0.00, 0],\
[300.00, 1484.21, 0.00, 1.0300, 0.00, 0],\
[310.00, 1483.89, 0.00, 1.0300, 0.00, 0],\
[320.00, 1483.61, 0.00, 1.0300, 0.00, 0],\
[330.00, 1483.34, 0.00, 1.0300, 0.00, 0],\
[340.00, 1483.09, 0.00, 1.0300, 0.00, 0],\
[350.00, 1482.86, 0.00, 1.0300, 0.00, 0],\
[360.00, 1482.64, 0.00, 1.0300, 0.00, 0],\
[375.00, 1482.34, 0.00, 1.0300, 0.00, 0],\
[400.00, 1481.89, 0.00, 1.0300, 0.00, 0],\
[425.00, 1481.49, 0.00, 1.0300, 0.00, 0],\
[450.00, 1481.14, 0.00, 1.0300, 0.00, 0],\
[475.00, 1480.84, 0.00, 1.0300, 0.00, 0],\
[500.00, 1480.60, 0.00, 1.0300, 0.00, 0],\
[525.00, 1480.43, 0.00, 1.0300, 0.00, 0],\
[550.00, 1480.31, 0.00, 1.0300, 0.00, 0],\
[575.00, 1480.23, 0.00, 1.0300, 0.00, 0],\
[600.00, 1480.20, 0.00, 1.0300, 0.00, 0],\
[650.00, 1480.20, 0.00, 1.0300, 0.00, 0],\
[700.00, 1480.27, 0.00, 1.0300, 0.00, 0],\
[750.00, 1480.40, 0.00, 1.0300, 0.00, 0],\
[800.00, 1480.57, 0.00, 1.0300, 0.00, 0],\
[850.00, 1480.77, 0.00, 1.0300, 0.00, 0],\
[900.00, 1481.00, 0.00, 1.0300, 0.00, 0],\
[950.00, 1481.25, 0.00, 1.0300, 0.00, 0],\
[1000.00, 1481.53, 0.00, 1.0300, 0.00, 0],\
[1050.00, 1481.83, 0.00, 1.0300, 0.00, 0],\
[1100.00, 1482.17, 0.00, 1.0300, 0.00, 0],\
[1150.00, 1482.53, 0.00, 1.0300, 0.00, 0],\
[1200.00, 1482.90, 0.00, 1.0300, 0.00, 0],\
[1250.00, 1483.27, 0.00, 1.0300, 0.00, 0],\
[1300.00, 1483.64, 0.00, 1.0300, 0.00, 0],\
[1350.00, 1484.04, 0.00, 1.0300, 0.00, 0],\
[1400.00, 1484.49, 0.00, 1.0300, 0.00, 0],\
[1450.00, 1484.97, 0.00, 1.0300, 0.00, 0],\
[1500.00, 1485.47, 0.00, 1.0300, 0.00, 0],\
[1550.00, 1485.96, 0.00, 1.0300, 0.00, 0],\
[1600.00, 1486.45, 0.00, 1.0300, 0.00, 0],\
[1650.00, 1486.93, 0.00, 1.0300, 0.00, 0],\
[1700.00, 1487.43, 0.00, 1.0300, 0.00, 0],\
[1750.00, 1487.95, 0.00, 1.0300, 0.00, 0],\
[1800.00, 1488.51, 0.00, 1.0300, 0.00, 0],\
[1850.00, 1489.09, 0.00, 1.0300, 0.00, 0],\
[1900.00, 1489.70, 0.00, 1.0300, 0.00, 0],\
[1950.00, 1490.34, 0.00, 1.0300, 0.00, 0],\
[2000.00, 1490.99, 0.00, 1.0300, 0.00, 0],\
[2100.00, 1492.35, 0.00, 1.0300, 0.00, 0],\
[2200.00, 1493.76, 0.00, 1.0300, 0.00, 0],\
[2300.00, 1495.22, 0.00, 1.0300, 0.00, 0],\
[2400.00, 1496.71, 0.00, 1.0300, 0.00, 0],\
[2500.00, 1498.23, 0.00, 1.0300, 0.00, 0],\
[2750.00, 1502.14, 0.00, 1.0300, 0.00, 0],\
[3000.00, 1506.18, 0.00, 1.0300, 0.00, 0],\
[3250.00, 1510.33, 0.00, 1.0300, 0.00, 0],\
[3500.00, 1514.53, 0.00, 1.0300, 0.00, 0],\
[3750.00, 1518.76, 0.00, 1.0300, 0.00, 0],\
[4000.00, 1523.21, 0.00, 1.0300, 0.00, 0],\
[4250.00, 1527.84, 0.00, 1.0300, 0.00, 0],\
[4500.00, 1531.45, 0.00, 1.0300, 0.00, 0],\
[4750.00, 1533.37, 0.00, 1.0300, 0.00, 0],\
[5000.00, 1536.15, 0.00, 1.0300, 0.00, 0],\
[5000.000, 1513.108, 0.000, 1.75100, 0.000, 0.000],\
[5300.000, 1613.108, 0.000, 1.75100, 0.000, 0.000]",
        bottomBCType: 'R',
        sigma: 0,
        zb: 0,
        cpb: 0,
        csb: 0,
        rhob: 2,
        apb: 0,
        asb: 0,
        cLow: 1300,
        cHigh: 1700,
        rMax: 5000000,
        nsd: 1,
        sd: '500',
        nrd: 500,
        rd: '0,5300',
        calculateTransmissionLoss: false,
        nModesForField: 9999,
        sourceType: 'R',
        modesTheory: 'A',        
        nr: 501,
        r: '200,220',
        nsdField: 1,
        sdField: '500',
        nrdField: 500,
        rdField: '0,5300',
        nrr: 1,
        rr: '0'
    };

    render() {
        return (<Row>
            <Helmet>
                <title>Test case #1 (testkrak1.m)</title>
            </Helmet>
            <Col xs={12}>
                <div>                    
                    <p>Test case #1 (testkrak1.m) from <a href="https://oalib-acoustics.org/Modes/matlab.kraken.tgz">Matlab KRAKEN (B. Dushaw APL , Univ. of Washington )</a></p>
                </div>
                <FormWrapper acousticProblemData={this.acousticProblemData} />
            </Col>
        </Row>)
    }
}