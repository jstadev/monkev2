import { Accordion } from "react-bootstrap";

export default function FaqAccordionThree() {
	return (
		<div className="monke--faq-section dark-version monke--section-padding">
			<div className="container">
				<div className="monke--section-title">
					<div className="monke--default-content content-sm">
						<h2>If you need to know anything about the collection, just ask us!</h2>
					</div>
				</div>
				<div className="monke--accordion-one accordion-four" id="accordionExample">
					<Accordion defaultActiveKey="0">
						<Accordion.Item eventKey="0">
							<Accordion.Header>How many NFTs?</Accordion.Header>
							<Accordion.Body>
							The supply is 69.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>What makes our NFTs valuable?</Accordion.Header>
							<Accordion.Body>
							Apart from looking cool, Monkeys will have gaming utility in the future. 							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>Where to buy?</Accordion.Header>
							<Accordion.Body>
							We currently trade on  <a href="https://raresama.com/collections/2109/0xf31a93551b4933a1474df37a89889fc134abf05e" target={"_blank"}>Raresama</a> 							</Accordion.Body>
						</Accordion.Item>

						{/* <Accordion.Item eventKey="3">
							<Accordion.Header>Lorem Ipsum</Accordion.Header>
							<Accordion.Body>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="4">
							<Accordion.Header>Lorem Ipsum</Accordion.Header>
							<Accordion.Body>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
							</Accordion.Body>
						</Accordion.Item> */}
					</Accordion>
				</div>
			</div>
		</div>
	);
}
