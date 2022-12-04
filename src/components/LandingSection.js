const LandingSection = () => (
    <FullScreenSection
        justifyContent="center"
        alignItems="center"
        isDarkBackground
        backgroundColor="#2A4365"
    >
        <Heading>Landing Section</Heading>
        <VStack>
            <Avatar src='https://i.pravatar.cc/150?img=7' />
            <p>{greeting}</p>
            <p>{bio1}</p>
            <p>{bio2}</p>
        </VStack>
    </FullScreenSection>
);

export default LandingSection;