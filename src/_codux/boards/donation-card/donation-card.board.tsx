import { createBoard } from '@wixc3/react-board';
import  DonationCard  from '../../../components/donation-card/donation-card';

export default createBoard({
    name: 'DonationCard',
    Board: () => (
        <DonationCard
            title="Save the Whales"
            description="Join us in our mission to protect these magnificent creatures of the sea. Your donation helps us to fund conservation efforts and raise awareness."
            donationTarget={50000}
            amount={20000}
            isOpen={true}
            onShowMore={() => console.log('Show more')}
            onShowModal={() => console.log('Show modal')}
        />
    ),
    isSnippet: true,
});