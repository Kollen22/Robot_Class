const puppeteer = require('puppeteer');
const { User, Link } = require('./data');

let i = true;
let j = true;

(async () =>{

    const browser = await puppeteer.launch({executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe', headless: false});

    const page = await browser.newPage();
    await page.goto(Link.login);


    await page.evaluate(() => {
        const login = document.querySelector('.form-control#coAcesso');
        const password = document.querySelector('.form-control#coSenha');
        const buttonL = document.querySelector('#btn-login');
        const buttonC = document.querySelector('#btnAceitarPoliticasCookies');
        buttonC.click();
        login.value = la;
        password.value = li;
        buttonL.click();
    })

    await page.waitForNavigation();
    
    await page.goto(Link.turm);

    await page.type('[type="email"]', User.user);
        await page.click('[jscontroller="soHxf"]');
    
        await page.waitForNavigation();
    
        await page.evaluate(() =>{
    
            setTimeout(() =>{
                console.log('cheguei');
                const log = document.querySelector('.whsOnd.zHQkBf');
                const enter = document.querySelector('[jscontroller="soHxf"]');
                log.value = User.password;
    
                enter.click();
            }, 1000);
    
        })
        console.log('aq2');
    
        await page.waitForNavigation();
        


 while (j){    
    console.log('volteo');  
    
    voltar: while (i){
    
        let week = ['Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado', 'Domingo'];
        const date = new Date;
        const hour = date.getHours();
        const min = date.getMinutes();
        week = week[ date.getDay() ];
    
    
        if(week === 'Segunda' && hour === 19 && min === 10){
            await page.goto(User.IntC1);
    
            await page.evaluate(() =>{
                console.log('cheguei');
                
                const enter = document.querySelector('.NPEfkd.RveJvd.snByac');
                dis.click();
    
                setTimeout(() =>{
                    enter.click();
                }, 2000);
            })
    
                await page.waitForSelector('span.N0PJ8e')
                await page.keyboard.press('Escape');

                back: while(wait){
                    const dat1 = new Date;
                    const Hour = dat1.getHours();
                    const Min = dat1.getMinutes();
                    const View = await page.evaluate(() =>{
                        const view = document.querySelector('[class="wnPUne N0PJ8e"]').innerHTML;
                        return  view;
                    });

                    if(Hour >= 20 && Min >= 00){
                        if(View <=5){
                            i = false
                            wait = false;
                        }
                    }else{
                        continue back;
                    }
                }

                if(wait === false){
                    page.goto(Link.turm);
                }
        }
        else if(week === 'Segunda' && hour === 21 && min === 00){
            await page.goto(User.Mat);
    
            await page.evaluate(() =>{
                console.log('cheguei');
                
                const enter = document.querySelector('.NPEfkd.RveJvd.snByac');
                dis.click();
    
                setTimeout(() =>{
                    enter.click();
                }, 2000);
            })

            await page.waitForSelector('span.N0PJ8e')
                await page.keyboard.press('Escape');

                back: while(wait){
                    const dat1 = new Date;
                    const Hour = dat1.getHours();
                    const Min = dat1.getMinutes();
                    const View = await page.evaluate(() =>{
                        const view = document.querySelector('[class="wnPUne N0PJ8e"]').innerHTML;
                        return  view;
                    });

                    if(Hour >= 20 && Min >= 00){
                        if(View <=5){
                            i = false
                            wait = false;
                        }
                    }else{
                        continue back;
                    }
                }

                if(wait === false){
                    page.goto(Link.turm);
                }
        }
            
        else if(week === 'Terca' && hour === 19 && min === 10){
            await page.goto(User.Sis);
    
            await page.evaluate(() =>{
                console.log('cheguei');
                
                const enter = document.querySelector('.NPEfkd.RveJvd.snByac');
                dis.click();
    
                setTimeout(() =>{
                    enter.click();
                }, 2000);
            })
            
            await page.waitForSelector('span.N0PJ8e')
                await page.keyboard.press('Escape');

                back: while(wait){
                    const dat1 = new Date;
                    const Hour = dat1.getHours();
                    const Min = dat1.getMinutes();
                    const View = await page.evaluate(() =>{
                        const view = document.querySelector('[class="wnPUne N0PJ8e"]').innerHTML;
                        return  view;
                    });

                    if(Hour >= 20 && Min >= 00){
                        if(View <=5){
                            i = false
                            wait = false;
                        }
                    }else{
                        continue back;
                    }
                }

                if(wait === false){
                    page.goto(Link.turm);
                }
        }
    
        else if(week === 'Terca' && hour === 21 && min === 00){
            await page.goto(User.Log);
    
            await page.evaluate(() =>{
                console.log('cheguei');
                
                const enter = document.querySelector('.NPEfkd.RveJvd.snByac');
                dis.click();
    
                setTimeout(() =>{
                    enter.click();
                }, 2000);
            })
            await page.waitForSelector('span.N0PJ8e')
                await page.keyboard.press('Escape');

                back: while(wait){
                    const dat1 = new Date;
                    const Hour = dat1.getHours();
                    const Min = dat1.getMinutes();
                    const View = await page.evaluate(() =>{
                        const view = document.querySelector('[class="wnPUne N0PJ8e"]').innerHTML;
                        return  view;
                    });

                    if(Hour >= 20 && Min >= 00){
                        if(View <=5){
                            i = false
                            wait = false;
                        }
                    }else{
                        continue back;
                    }
                }

                if(wait === false){
                    page.goto(Link.turm);
                }
        }
            
        else if(week === 'Quarta' && hour === 19 && min === 10){
            await page.goto(User.Mat);
            await page.evaluate(() =>{
                console.log('Materia 1'); 
                const enter = document.querySelector('.NPEfkd.RveJvd.snByac');

                setTimeout(() =>{
                    enter.click();
                }, 2000);

                setTimeout(() =>{
                    document.querySelector('[class="RveJvd snByac"]').click();
                    console.log('Olá');
                }, 5000);
                
            })
    
                await page.waitForSelector('span.N0PJ8e')
                await page.keyboard.press('Escape');

                back: while(wait){
                    const dat1 = new Date;
                    const Hour = dat1.getHours();
                    const Min = dat1.getMinutes();
                    const View = await page.evaluate(() =>{
                        const view = document.querySelector('[class="wnPUne N0PJ8e"]').innerHTML;
                        return  view;
                    });

                    if(Hour >= 20 && Min >= 00){
                        if(View <=5){
                            i = false
                            wait = false;
                        }
                    }else{
                        continue back;
                    }
                }

                if(wait === false){
                    page.goto(Link.turm);
                }
        }
    
        else if(week === 'Quarta' && hour === 21 && min === 00){
            await page.goto(User.Adm);
    
            await page.evaluate(() =>{
                console.log('cheguei');
                
                const enter = document.querySelector('.NPEfkd.RveJvd.snByac');
                dis.click();
    
                setTimeout(() =>{
                    enter.click();
                }, 2000);
            })
    
            await page.waitForSelector('span.N0PJ8e')
                await page.keyboard.press('Escape');

                back: while(wait){
                    const dat1 = new Date;
                    const Hour = dat1.getHours();
                    const Min = dat1.getMinutes();
                    const View = await page.evaluate(() =>{
                        const view = document.querySelector('[class="wnPUne N0PJ8e"]').innerHTML;
                        return  view;
                    });

                    if(Hour >= 20 && Min >= 00){
                        if(View <=5){
                            i = false
                            wait = false;
                        }
                    }else{
                        continue back;
                    }
                }

                if(wait === false){
                    page.goto(Link.turm);
                }
        }
            
            else if(week === 'Quinta' && hour === 19 && min === 10){
                await page.goto(User.Log);
    
                await page.evaluate(() =>{
                    console.log('cheguei');
                    
                    const enter = document.querySelector('.NPEfkd.RveJvd.snByac');
                    dis.click();
    
                    setTimeout(() =>{
                        enter.click();
                    }, 2000);
                })

                await page.waitForSelector('span.N0PJ8e')
                await page.keyboard.press('Escape');

                back: while(wait){
                    const dat1 = new Date;
                    const Hour = dat1.getHours();
                    const Min = dat1.getMinutes();
                    const View = await page.evaluate(() =>{
                        const view = document.querySelector('[class="wnPUne N0PJ8e"]').innerHTML;
                        return  view;
                    });

                    if(Hour >= 20 && Min >= 00){
                        if(View <=5){
                            i = false
                            wait = false;
                        }
                    }else{
                        continue back;
                    }
                }

                if(wait === false){
                    page.goto(Link.turm);
                }
            }
            
            else if(week === 'Quinta' && hour === 21 && min === 00){
                await page.goto(User.Adm);
    
                await page.evaluate(() =>{
                    console.log('Materia 1'); 
                    const enter = document.querySelector('.NPEfkd.RveJvd.snByac');
    
                    setTimeout(() =>{
                        enter.click();
                    }, 2000);

                    setTimeout(() =>{
                        document.querySelector('[class="RveJvd snByac"]').click();
                        console.log('Olá');
                    }, 5000);
                    
                })

                await page.waitForSelector('span.N0PJ8e')
                await page.keyboard.press('Escape');

               back: while(wait){
                    const dat1 = new Date;
                    const Hour = dat1.getHours();
                    const Min = dat1.getMinutes();
                    const View = await page.evaluate(() =>{
                        const view = document.querySelector('[class="wnPUne N0PJ8e"]').innerHTML;
                        return  view;
                    });

                    if(Hour >= 20 && Min >= 00){
                        if(View <=5){
                            i = false
                            wait = false;
                        }
                    }else{
                        continue back;
                    }
                }

                if(wait === false){
                    page.goto(Link.turm);
                }

            }
    
            else if(week === 'Sexta' && hour === 19 && min === 10){
                await page.goto(User.adm);
                await page.evaluate(() =>{
                    console.log('Materia 1'); 
                    const enter = document.querySelector('.NPEfkd.RveJvd.snByac');
    
                    setTimeout(() =>{
                        enter.click();
                    }, 2000);

                    setTimeout(() =>{
                        document.querySelector('[class="RveJvd snByac"]').click();
                        console.log('Olá');
                    }, 5000);
                    
                })

                await page.waitForSelector('span.N0PJ8e')
                await page.keyboard.press('Escape');

               back: while(wait){
                    const dat1 = new Date;
                    const Hour = dat1.getHours();
                    const Min = dat1.getMinutes();
                    const View = await page.evaluate(() =>{
                        const view = document.querySelector('[class="wnPUne N0PJ8e"]').innerHTML;
                        return  view;
                    });

                    if(Hour >= 20 && Min >= 00){
                        if(View <=5){
                            i = false
                            wait = false;
                        }
                    }else{
                        continue back;
                    }
                }

                if(wait === false){
                    page.goto(Link.turm);
                }

    
            }
    
            else if(week === 'Sexta' && hour === 21 && min === 00){
                let wait = true;
                await page.goto(User.IntC2);
    
                await page.evaluate(() =>{
                    console.log('Materia 2');
                    
                    const enter = document.querySelector('.NPEfkd.RveJvd.snByac');
    
                    setTimeout(() =>{
                        enter.click();
                    }, 2000);
                })
                
                await page.waitForSelector('span.N0PJ8e')
                await page.keyboard.press('Escape');

                back: while(wait){
                    const dat1 = new Date;
                    const Hour = dat1.getHours();
                    const Min = dat1.getMinutes();
                    const View = await page.evaluate(() =>{
                        const view = document.querySelector('[class="wnPUne N0PJ8e"]').innerHTML;
                        return  view;
                    });

                    if(Hour >= 20 && Min >= 00){
                        if(View <=5){
                            i = false
                            wait = false;
                        }
                    }else{
                        continue back;
                    }
                }

                if(wait === false){
                    page.goto(Link.turm);
                }

            }
            else{
                continue voltar;
            }
        }
}

})()