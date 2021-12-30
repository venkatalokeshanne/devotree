import FlipCard from './flipCard';
function Game() {
    return (
        <div className='text-center pt-32 md:pt-64 mx-auto md:w-3/5' id="testing">
            <h2 className='purple'>Let's Play</h2>
            <p className='text-gray-400 mt-5' data-aos="fade-right" data-aos-duration="2000">Interest : the feeling of wanting to give your attention to something or of wanting to be involved with and to discover more about something. <br/> <br/>
            </p>
            <p data-aos="fade-right" data-aos-duration="2000" className='text-white'>Flip the cards and find my Interest's</p>
            <FlipCard />
            <p data-aos="fade-right" data-aos-duration="2000" className='text-gray-400'>Your interests are the activities that you enjoy doing and the subjects that you like to spend time learning about.</p>
        </div>
    )
}

export default Game;