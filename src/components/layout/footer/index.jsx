import React from 'react';
import socialMedia from "../../../data/socialMedia.json";
import data from "./../../../data/data";
import { FooterStyle, FooterBody, SubRight, CopyRight, MediaLink, FooterSocialMedia } from './style'
import {ContainerLayout, ButtonDefault} from '../../common'

const Footer = () => {
	return (
		<>
			<FooterStyle>					
					<ContainerLayout>											
					<FooterBody>						
						<FooterSocialMedia>							
							{socialMedia.map(({ id, name, url }) => (
								<li key={id}> 
									<MediaLink className="lined-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={`follow us on ${name}`}>
										{name}
									</MediaLink> 
								</li>
							))}							
						</FooterSocialMedia>
						<div>
							<p className="text-primary quote"> Interested in books and want to work together? </p>							
							<ButtonDefault href={`mailto:${data.SiteContact.email}`}> Contact me </ButtonDefault>
						</div>
						<a href="https://www.buymeacoffee.com/NileshEvrywhr"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza?&emoji=🍕&slug=NileshEvrywhr&button_colour=FFDD00&font_colour=000000&font_family=Lato&outline_colour=000000&coffee_colour=ffffff" alt="buy-me-a-coffee-buttonx`"></img></a>
					</FooterBody>
					<div className="box">
						<SubRight> Read what you love. Until you love to read. </SubRight>
						<CopyRight className="text-dark">
							©<span> {new Date().getFullYear()}, Built by <a href="https://nilesheverywhere.com" rel="noopener noreferrer">{data.SiteAuthor}</a></span> 
						</CopyRight>
					</div>
				</ContainerLayout>
			</FooterStyle>
		</>
	)
}

export default Footer;