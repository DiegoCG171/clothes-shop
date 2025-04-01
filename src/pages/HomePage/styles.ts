import { CSSProperties } from 'react';

export const containerStyle: CSSProperties = {
  width: "100%",
  height: "440px",
  marginTop: "10px",
  background: "#F6F6F6"
};

export const rowStyle: CSSProperties = {
  height: "100%",
  margin: 0
};

export const textColumnStyle: CSSProperties = {
  paddingLeft: "10%"
};

export const titleStyle: CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 600,    
    fontSize: "32px",    
    lineHeight: "100%", 
    marginBottom: "16px",
    color: "#0E1422",
};

export const subtitleStyle: CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 400,      
    fontSize: "14px",      
    lineHeight: "175%",     
    letterSpacing: "0%",   
    marginBottom: "40px",
    color: "#5C5F6A",
};

export const buttonStyle: CSSProperties = {
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "175%",
    letterSpacing: "0",
    background: "#0E1422",
    color: "#fff",
    padding: "0 20px",      
    height: "36px",         
    minWidth: "auto",     
    width: "fit-content",  
    border: "none",
    display: "flex",
    alignItems: "center",
    gap: "4px"    
};