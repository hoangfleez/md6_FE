import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProviderDetail } from "../../services/providerService";
import { Box, Button, CardMedia, Container, Divider, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import moment from "moment";

const DetailProvider = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    const detailProviderDetail = useSelector((state) => {
        return state.provider.showOneProvider;
    });
    console.log(detailProviderDetail,99999)

    useEffect(() => {
        dispatch(getProviderDetail(id));
    }, []);
    return (
        <Box
            sx={{
                marginTop: "64px",
                padding: "10px",
                height: "93vh",
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ display: "flex", width: "100%", height: "100%" }}>
                    <Box sx={{ width: "20%" }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 250}}
                            image={detailProviderDetail.avatar}
                            alt="Avatar"
                        />
                        <Typography component="h2">
                            Ngày tham gia:{" "}
                            {moment(detailProviderDetail.joinDate).format("DD/MM/YYYY")}
                        </Typography>
                        <Link to={detailProviderDetail.linkFB}>
                            <FacebookIcon sx={{ color: "blue", fontSize: "60px" }} />
                        </Link>
                        <div> Giới tính: {detailProviderDetail.sex}</div>
                        <div> Sinh nhật: {detailProviderDetail.dob}</div>
                        <div> Quốc tịch: {detailProviderDetail.country}</div>
                        <div> Sở thích: {detailProviderDetail.hobby}</div>
                        <div> Chiều cao: {detailProviderDetail.height}</div>
                        <div> Cân nặng: {detailProviderDetail.weight}</div>
                    </Box>
                    <Box sx={{ width: "60%", padding: "0 40px" }}>
                        <Typography variant="h3">{detailProviderDetail.name}</Typography>
                        <Divider />
                        <div> Mô tả bản thân: {detailProviderDetail.desc}</div>

                    </Box>
                    <Box sx={{ width: "20%" }}>
                        <Box
                            sx={{
                                width: 250,
                                border: "1px solid grey",
                                borderRadius: "15px",
                                padding: "10px"
                            }}
                        >
                            <Typography variant="h4" gutterBottom sx={{color:"red"}}>
                                {detailProviderDetail.price} đ/1h
                            </Typography>
                            <Box sx={{flexWrap:"wrap", gap:"15px", display:"flex"}}>
                                <Button fullWidth variant="contained">DONET</Button>
                                <Button fullWidth variant="contained">Chat</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default DetailProvider;