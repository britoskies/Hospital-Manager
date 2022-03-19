import { Box, Typography } from '@mui/material';

type Props = {
    date: string,
    blood: string,
    sugar: string,
    cholesterol: string
};

function PhConditionItem({ date, blood, sugar, cholesterol }: Props) {
    return (
        <Box className='info-container'>
            <Box>
                <Typography sx={{ color: '#C0C0C0', fontSize: '14px', marginTop: '15px' }}> Evaluation Date </Typography>
                <Typography sx={{ fontWeight: 900, fontSize: '16px', marginBottom: '10px' }}>
                    {new Date(new Date(date).getTime() + 86400000).toLocaleDateString()}
                </Typography>
            </Box>
            <Box>
                <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Blood Pressure </Typography>
                <Typography sx={{ fontWeight: 900, fontSize: '16px', marginBottom: '10px' }}>
                    {blood ? blood : 'Unknown'}
                </Typography>
            </Box>
            <Box>
                <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Sugar Level </Typography>
                <Typography sx={{ fontWeight: 900, fontSize: '16px', marginBottom: '10px' }}>
                    {sugar ? sugar : 'Unknown'}
                </Typography>
            </Box>
            <Box>
                <Typography sx={{ color: '#C0C0C0', fontSize: '14px' }}> Cholesterol </Typography>
                <Typography sx={{ fontWeight: 900, fontSize: '16px', marginBottom: '10px' }}>
                    {cholesterol ? cholesterol : 'Unknown'}
                </Typography>
            </Box>
        </Box>
    );
}

export default PhConditionItem;