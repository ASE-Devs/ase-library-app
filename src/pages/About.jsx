import React from 'react'
import PagesLayout from '../layout/PagesLayout'
import ContactForm from '../components/ContactForm'
import AboutSection from '../components/AboutMe'

const About = () => {
    return (
        <div>
            <PagesLayout>
                <AboutSection />
                <ContactForm />
            </PagesLayout>


        </div>
    )
}

export default About