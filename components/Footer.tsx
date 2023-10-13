import { SocialIcon } from "react-social-icons"

interface iProps {
    className: string
}
export default function Footer({className}: iProps) {
    return (
        <div className={className}>
            {/* <h2 className="text-primary text-center text-xl lg:text-2xl my-4">Share on Social Media</h2> */}
            <div className="flex flex-col lg:flex-row items-center gap-4 justify-between">
                <div className="flex flex-col w-[45%]">
                    <h2 className="text-primary text-center text-xl lg:text-2xl my-4">Share on Social Media</h2>
                    <div className=" flex gap-2 lg:gap-4 justify-center items-center mt-2 lg:mt-4">
                        <SocialIcon className="" href="https://www.facebook.com/sharer/sharer.php?u=http%3A//localhost" network="facebook" />
                        <SocialIcon className="" href="https://twitter.com/intent/tweet?url=http://localhost&text=Westeros%20Coffee" network="x" />
                        <SocialIcon className="" href="https://pinterest.com/pin/create/button/?url=http://localhost&media=&description=Westeros%20Coffee" network="pinterest" />
                        <SocialIcon className="" href="https://www.linkedin.com/shareArticle?mini=true&url=http%3A//localhost" network="linkedin"/>
                        <SocialIcon className="" href="mailto:info@example.com?&subject=&cc=&bcc=&body=http://localhost%0AWesteros%20Coffee" network="email" />
                    </div>
                </div>
                <div className="w-[45%] ">
                    <h2 className="text-primary text-center text-xl lg:text-2xl">Hire me</h2>
                    <p>Do you like my work??  Hire me!!!!</p>
                    <div className="mt-4 flex justify-start">
                      <div className="w-[50%]">Contact Me</div>
                      <div className="underline">
                        <a
                          target="_blank"
                          href="https://www.linkedin.com/in/rafaelbarbosa51/"
                        >     
                          LinkedIn
                        </a>  
                      </div>
                    </div>
                    <div className="mt-4 flex justify-start">
                      <div className="w-[50%]">View my work</div>
                      <div className="underline">
                        <a target="_blank" href="https://github.com/rbarbosa51">
                          GitHub
                        </a>  
                      </div>
                    </div>
                    <div className="mt-4 flex justify-start">
                      <div className="w-[50%]">Email</div>
                      <div className="underline">
                        <a target="_blank" href="mailto:rafael.barbosa51@gmail.com">
                          Email
                        </a>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    )
}