
import { useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap"
// import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../Assets/masibo2.jpg";
export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Web Designer", "Mechanical Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
         tick();
        },delta)

        return () => { clearInterval(ticker)};

    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }

    }



    return (
        <section className="banner" id="home"> 
         <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Masibo `}<span className="wrap">{text}</span></h1>
                    <p>I am confident that my dedication, adaptability, and passion for 
                        learning will make me a valuable</p>
                        <button onClick={() => console.log('connect')}>Let's connect </button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt="Header Img"/>

                </Col>
            </Row>
         </Container>

        </section>
    )
}